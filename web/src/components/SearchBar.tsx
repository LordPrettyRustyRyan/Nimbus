import { Search } from "lucide-react";
import { useState } from "react";

interface Props {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: Props) {

    const [query, setQuery] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query.trim());
    };

    return (
        <form onSubmit={submit} className="mx-auto flex max-w-xl gap-3 py-8">
            <input
                type="text"
                placeholder="Search news..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="rounded-lg bg-blue-600 px-4 text-white hover:bg-blue-700">
                <Search />
            </button>
        </form>
    );
}