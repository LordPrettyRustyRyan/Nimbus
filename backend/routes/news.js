import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

const GNEWS_API_URL =
    process.env.GNEWS_API_URL || "https://gnews.io/api/v4/top-headlines";

const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
const cache = new Map();

router.get("/", async (req, res) => {
    try {
        const {
            category,
            q,
            country = "in",
            lang = "en",
            max = 9
        } = req.query;

        const params = {
            apikey: process.env.GNEWS_API_KEY,
            country,
            lang,
            max,
        };

        const cacheKey = JSON.stringify({
            category,
            q,
            country,
            lang,
            max,
        });

        const cached = cache.get(cacheKey);

        if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
            console.log("Serving cached response:", cacheKey);
            return res.json(cached.data);
        }

        if (category) params.category = category.toLowerCase();
        if (q) params.q = q;

        const response = await axios.get(GNEWS_API_URL, { params });

        // Normalize response to resemble NewsAPI
        const articles = response.data.articles.map(article => ({
            source: {
                id: null,
                name: article.source?.name || "Unknown"
            },
            author: null,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.image,
            publishedAt: article.publishedAt,
            content: article.content
        }));

        const result = {
            status: "ok",
            totalResults: articles.length,
            articles,
        };

        cache.set(cacheKey, {
            timestamp: Date.now(),
            data: result,
        });

        res.json(result);

    } catch (error) {
        console.error("GNews Error:", error.response?.data || error.message);

        res.status(500).json({
            status: "error",
            message: "Failed to fetch news.",
            error: error.response?.data || error.message
        });
    }
});

export default router;