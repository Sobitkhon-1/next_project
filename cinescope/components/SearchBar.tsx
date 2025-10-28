"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

import { Movie } from "@/libs/types";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (query.length > 2) {
        setLoading(true);
        try {
          const res = await fetch(`/api/search?query=${query}`);
          if (!res.ok) {
            throw new Error(`Search failed: ${res.status}`);
          }
          const data = await res.json();
          setResults(data.results as Movie[] || []);
          setError("");
        } catch (err) {
          setError(err instanceof Error ? err.message : "An error occurred");
          setResults([]);
        } finally {
          setLoading(false);
        }
      } else {
        setResults([]);
        setError("");
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="max-w-2xl mx-auto mb-8 relative">
      <div className="relative">
        <input
          type="text"
          placeholder="🔍 Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-4 pl-12 rounded-2xl bg-gray-800/90 backdrop-blur-sm text-white placeholder-gray-400 outline-none border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 shadow-lg"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {loading && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          <LoadingSpinner />
        </div>
      )}

      {error && (
        <div className="bg-red-900/90 backdrop-blur-sm mt-4 rounded-xl p-4 text-red-200 border border-red-700">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            {error}
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="bg-gray-800/95 backdrop-blur-sm mt-4 rounded-xl p-4 max-h-96 overflow-y-auto border border-gray-700 shadow-2xl">
          {results.map((m) => (
            <Link key={m.id} href={`/movie/${m.id}`} className="block border-b border-gray-700/50 py-3 text-white hover:bg-gray-700/50 transition-all duration-200 rounded-lg px-3 -mx-3 hover:px-3">
              <div className="flex items-center justify-between">
                <span className="font-medium">{m.title}</span>
                <span className="text-yellow-400 text-sm">⭐ {m.vote_average?.toFixed(1) || 'N/A'}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
