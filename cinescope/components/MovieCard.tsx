import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/libs/types";

export default function MovieCard({ movie }: { movie: Movie }) {
  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/no-image.jpg";

  return (
    <Link href={`/movie/${movie.id}`} className="group block">
      <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
        <div className="relative overflow-hidden">
          <Image
            src={imagePath}
            alt={movie.title}
            width={300}
            height={450}
            className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h2 className="text-lg font-semibold text-white mb-1">
              {movie.title}
            </h2>
            <p className="text-sm text-yellow-400 flex items-center">
              <span className="mr-1">⭐</span> {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
