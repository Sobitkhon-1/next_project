import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("query");

    if (!query) {
      return NextResponse.json({ error: "Query parameter is required" }, { status: 400 });
    }

    const encodedQuery = encodeURIComponent(query);
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${encodedQuery}`
    );

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch data from TMDB" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in search API:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
