export default function FavouritesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
          🎬 My Favourites
        </h1>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">❤️</div>
          <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
          <p className="text-gray-300 text-lg">
            Your favourite movies will appear here. This feature is under development.
          </p>
        </div>
      </div>
    </main>
  );
}