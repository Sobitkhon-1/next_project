"use client";

import { useState, useEffect } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (query.length > 2) {
        const res = await fetch(`/api/search?query=${query}`);
        const data = await res.json();
        setResults(data.results);
      } else {
        setResults([]);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="max-w-xl mx-auto mb-6">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none"
      />

      {results.length > 0 && (
        <div className="bg-gray-900 mt-2 rounded-lg p-3 max-h-96 overflow-y-auto">
          {results.map((m: any) => (
            <div key={m.id} className="border-b border-gray-700 py-2">
              {m.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
