import Link from "next/link";

export default function MovieCard({ movie }: { movie: any }) {
  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-image.jpg";

  return (
    <Link href={`/movie/${movie.id}`} className="group">
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition">
        <img src={imagePath} alt={movie.title} className="w-full h-80 object-cover" />
        <div className="p-3 text-center">
          <h2 className="text-lg font-semibold text-white group-hover:text-yellow-400">
            {movie.title}
          </h2>
          <p className="text-sm text-gray-400">⭐ {movie.vote_average.toFixed(1)}</p>
        </div>
      </div>
    </Link>
  );
}
