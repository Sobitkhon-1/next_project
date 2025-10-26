import { getTrendingMovies } from "@/libs/tmdb";
import MovieCard from "@/components/MovieCard";

export default async function Home() {
  const data = await getTrendingMovies();
  const movies = data.results;

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">🎬 Trending Movies</h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

