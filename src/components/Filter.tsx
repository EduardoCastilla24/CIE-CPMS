// src/components/Filter.tsx
import { useState, useEffect } from "react";
import Tree from "./Tree";
import type { Nodo } from "./Tree";

interface FilterProps {
  data: Nodo[];
}

export default function Filter({ data }: FilterProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(handler);
  }, [query]);

  return (
    <div className="space-y-4 mt-10 w-full">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        placeholder="Buscar por código o nombre..."
        className="text-xs md:text-sm text-[#353535] w-full p-3 bg-white border focus:border-foreground rounded-lg shadow-sm focus:ring-2 pl-4 focus:ring-foreground"
      />

      <Tree data={data} filter={debouncedQuery} />
    </div>
  );
}
