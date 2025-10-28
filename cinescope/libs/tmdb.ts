import { Movie, TMDBResponse } from "./types";

const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrendingMovies(): Promise<TMDBResponse<Movie>> {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`, {
    next: { revalidate: 3600 }, // revalidate every hour
  });

  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}

export async function getMovieDetails(id: string): Promise<Movie> {
  const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&append_to_response=videos,credits`);
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
}
