# Cinescope 🎬

A modern movie discovery app built with Next.js, TypeScript, and Tailwind CSS. Browse trending movies, search for your favorites, and explore detailed movie information powered by The Movie Database (TMDB).

## Features

- 🎯 **Trending Movies**: Discover the latest trending movies
- 🔍 **Search Functionality**: Search for movies by title
- 📱 **Responsive Design**: Optimized for all devices
- 🎨 **Modern UI**: Clean, dark theme with smooth animations
- ⚡ **Fast Performance**: Built with Next.js 16 and optimized for speed
- 🔒 **Type Safety**: Full TypeScript support with proper interfaces

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cinescope
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Get your TMDB API key from [TMDB Settings](https://www.themoviedb.org/settings/api) and add it to `.env.local`:
```env
TMDB_API_KEY=your_tmdb_api_key_here
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
cinescope/
├── app/
│   ├── api/search/          # Search API route
│   ├── movie/[id]/          # Movie detail pages
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── MovieCard.tsx        # Movie card component
│   ├── SearchBar.tsx        # Search functionality
│   └── LoadingSpinner.tsx   # Loading indicator
├── libs/
│   ├── tmdb.ts              # TMDB API functions
│   └── types.ts             # TypeScript interfaces
└── public/                  # Static assets
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: The Movie Database (TMDB)
- **Deployment**: Vercel (recommended)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
