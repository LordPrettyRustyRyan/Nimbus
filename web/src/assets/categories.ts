export const categories = [
    "general",
    "technology",
    "business",
    "sports",
    "health",
    "science",
] as const;

export type Category = (typeof categories)[number];