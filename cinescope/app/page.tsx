import { getTrendingMovies } from "@/libs/tmdb";
import MovieCarousel from "@/components/MovieCarousel";
import SearchBar from "@/components/SearchBar";
import { Movie } from "@/libs/types";

export default async function Home() {
  const data = await getTrendingMovies();
  const movies: Movie[] = data.results;

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent z-10" />
        <div className="relative z-20 p-6 max-w-6xl mx-auto">
          <div className="text-center py-20">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              🎬 CINESCOPE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover the latest trending movies and explore cinematic masterpieces
            </p>
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Movies Section */}
      <div className="relative z-20 p-6 max-w-7xl mx-auto">
        <MovieCarousel movies={movies} title="🎯 Trending This Week" />
      </div>
    </main>
  );
}

