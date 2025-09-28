// src/components/Filter.tsx
import { useState, useEffect } from "react";
import Tree from "./Tree";
import data from "@/data/cie10.json";

export default function Filter() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // cada vez que query cambia, esperamos 300ms antes de aplicarlo
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="space-y-4 mt-5 md:mt-10 w-full">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        placeholder="Buscar por código o nombre..."
        className="text-sm md:text-base w-full p-3 border rounded-lg shadow-sm focus:ring-2 pl-4 focus:ring-gray-400"
      />

      <Tree data={data} filter={debouncedQuery} />
    </div>
  );
}
