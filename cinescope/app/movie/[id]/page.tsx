import { getMovieDetails } from "@/libs/tmdb";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Movie } from "@/libs/types";

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const movie: Movie = await getMovieDetails(id);

  if (!movie) {
    return (
      <main className="p-6 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
          <p className="text-gray-400">The movie you're looking for doesn't exist.</p>
        </div>
      </main>
    );
  }

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-image.jpg";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Movie Poster */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <img
                src={poster}
                alt={movie.title}
                className="rounded-2xl w-full max-w-sm mx-auto lg:mx-0 shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          {/* Movie Details */}
          <div className="flex-1 space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {movie.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-lg">
                <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-semibold">
                  ⭐ {movie.vote_average.toFixed(1)}
                </span>
                <span className="text-gray-300">
                  📅 {new Date(movie.release_date).getFullYear()}
                </span>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
              <h2 className="text-2xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{movie.overview}</p>
            </div>

            {/* Trailer Section */}
            {movie.videos?.results && movie.videos.results.length > 0 && (
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
                <h2 className="text-2xl font-semibold mb-4">🎬 Official Trailer</h2>
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
                    title={`${movie.title} Trailer`}
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
