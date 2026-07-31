import { useEffect, useState } from "react";
import api from "../api/api";
import type { Category } from "../assets/categories";
import CategoryTabs from "../components/CategoryTabs";
import Loading from "../components/Loading";
import NewsGrid from "../components/NewsGrid";
import SearchBar from "../components/SearchBar";
import type { NewsArticle, NewsResponse } from "../types/news";

export default function Home() {
    // ==================== State Declarations ====================
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState<Category>("general");
    const [search, setSearch] = useState("");

    // ==================== Fetch News Function ====================
    async function fetchNews(selectedCategory: Category, query = "") {
        try {
            setLoading(true);
            const response = await api.get<NewsResponse>("/news", {
                params: {
                    category: selectedCategory,
                    q: query || undefined,
                },
            });
            setArticles(response.data.articles);
        } catch (error) {
            console.error(error);
            setArticles([]);
        } finally {
            setLoading(false);
        }
    }

    // ==================== Effects ====================
    useEffect(() => {
        fetchNews(category);
    }, []);

    // ==================== Event Handlers ====================
    function handleCategory(category: Category) {
        setCategory(category);
        fetchNews(category, search);
    }
    
    function handleSearch(query: string) {
        setSearch(query);
        fetchNews(category, query);
    }

    // ==================== Render Component ====================
    return (
        <main className="mx-auto max-w-7xl px-6 pb-8">

            {/* ==================== Header Section ==================== */}
            <header className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row">
                <h1 className="text-4xl font-bold tracking-tight">
                    <span className="text-blue-700">Nimbus</span>
                </h1>
                <div className="w-full md:w-105">
                    <SearchBar onSearch={handleSearch} />
                </div>
            </header>

            {/* ==================== Hero Section ==================== */}
            <section className="mb-10 text-center">
                <h2 className="text-5xl font-bold">
                    Welcome to <span className="text-blue-700">Nimbus</span>
                </h2>
                <p className="mt-5 text-lg text-gray-600">
                    Read the latest news from around the country.
                </p>
            </section>

            {/* ==================== Category Tabs ==================== */}
            <CategoryTabs
                selected={category}
                onSelect={handleCategory}
            />

            {/* ==================== Articles Grid/Loading ==================== */}
            <section className="mt-10">
                {loading
                    ? <Loading />
                    : <NewsGrid articles={articles} />
                }
            </section>
        </main>
    );
}