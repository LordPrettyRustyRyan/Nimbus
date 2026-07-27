import type { NewsArticle } from "../types/news";

interface Props {
    article: NewsArticle;
}

export default function NewsCard({ article }: Props) {
    return (
        <article className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:shadow-lg">

            <img
                src={article.urlToImage || "/placeholder.png"}
                alt={article.title}
                className="h-52 w-full object-cover"
            />

            <div className="space-y-3 p-5">

                <span className="text-sm font-medium text-blue-600">
                    {article.source.name}
                </span>

                <h2 className="line-clamp-2 text-xl font-bold">
                    {article.title}
                </h2>

                <p className="line-clamp-3 text-gray-600">
                    {article.description}
                </p>

                <div className="flex items-center justify-between pt-2">

                    <span className="text-sm text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </span>

                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Read →
                    </a>

                </div>

            </div>

        </article>
    );
}