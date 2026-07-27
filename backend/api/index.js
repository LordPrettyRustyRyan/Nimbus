import express from "express";
import cors from "cors";

import newsRoutes from "../routes/news.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/news", newsRoutes);

// Health check
app.get("/", (req, res) => {
    res.json({
        success: true,
        service: "Nimbus GNews API",
        status: "running",
    });
});

// Local development only
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`✅ Nimbus API running on http://localhost:${PORT}`);
    });
}

export default app;