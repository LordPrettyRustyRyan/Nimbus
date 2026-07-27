import type { NewsArticle } from "../types/news";

import NewsCard from "./NewsCard";

interface Props {
    articles: NewsArticle[];
}

export default function NewsGrid({ articles }: Props) {
    return (
        <section className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {articles.map((article) => (
                <NewsCard
                    key={article.url}
                    article={article}
                />
            ))}

        </section>
    );
}