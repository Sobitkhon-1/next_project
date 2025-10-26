import { getMovieDetails } from "@/libs/tmdb"

export default async function MoviePage({ params }: { params: { id: string } }) {
  const movie = await getMovieDetails(params.id);

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-image.jpg";

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={poster} alt={movie.title} className="rounded-xl w-72" />
        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-400 mb-2">
            Release: {movie.release_date} | ⭐ {movie.vote_average.toFixed(1)}
          </p>
          <p className="text-gray-300 mb-4">{movie.overview}</p>

          {movie.videos?.results?.length > 0 && (
            <iframe
              width="100%"
              height="315"
              src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
              title={movie.title}
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          )}
        </div>
      </div>
    </main>
  );
}
