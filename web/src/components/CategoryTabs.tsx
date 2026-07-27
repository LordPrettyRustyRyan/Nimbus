import { categories, type Category } from "../assets/categories";

interface Props {
    selected: Category;
    onSelect: (category: Category) => void;
}

export default function CategoryTabs({
    selected,
    onSelect,
}: Props) {
    return (
        <div className="flex flex-wrap justify-center gap-3 py-4">

            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition
                        ${
                            selected === category
                                ? "bg-blue-600 text-white"
                                : "border bg-white hover:bg-gray-100"
                        }`}
                >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            ))}

        </div>
    );
}