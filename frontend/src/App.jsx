import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-200 to-blue-200 flex flex-col">
      <header className="flex justify-between items-center px-8 py-6 bg-white/70 shadow-lg backdrop-blur-md rounded-b-2xl border-b border-purple-200">
        <span className="text-2xl font-extrabold text-purple-700 tracking-tight drop-shadow">aiApply</span>
        <nav className="flex gap-4 text-base">
          <a href="#" className="text-purple-700 hover:text-pink-500 font-semibold transition">All Tools</a>
          <a href="#" className="text-purple-700 hover:text-pink-500 font-semibold transition">Log in</a>
          <a href="#" className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white rounded-full font-bold shadow-lg hover:scale-105 hover:from-pink-400 hover:to-blue-600 transition-all duration-200">
            Start now
          </a>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div
          className="max-w-2xl w-full text-center mt-12 mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border-4 border-transparent bg-clip-padding p-10 relative"
          style={{
            borderImage: "linear-gradient(90deg, #a78bfa 0%, #f472b6 50%, #60a5fa 100%) 1"
          }}
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full shadow">Excellent</span>
            <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full shadow">★★★★★</span>
            <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full shadow">Trustpilot</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">
            Job Applications <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
              on Auto Pilot
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 font-medium drop-shadow">
            Let <span className="font-bold text-purple-600">AIApply</span> find and apply directly to hundreds of matching jobs for you,<br className="hidden sm:inline" /> so you can focus on interviews not applications.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 text-white font-extrabold shadow-xl hover:scale-105 hover:from-pink-400 hover:to-blue-600 transition-all duration-200"
            >
              Start now for free →
            </a>
            <span className="text-base text-gray-600 flex items-center gap-1 font-semibold">
              <span className="text-yellow-400">★★★★★</span>
              <span>Loved by <span className="text-purple-600 font-bold">19,431+</span> users</span>
            </span>
          </div>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-8 opacity-90">
            <span className="text-gray-500 text-lg font-semibold hover:text-blue-500 transition">coinbase</span>
            <span className="text-gray-500 text-lg font-semibold hover:text-green-500 transition">Spotify</span>
            <span className="text-gray-500 text-lg font-semibold hover:text-blue-700 transition">Microsoft</span>
            <span className="text-gray-500 text-lg font-semibold hover:text-fuchsia-600 transition">Meta</span>
            <span className="text-gray-500 text-lg font-semibold hover:text-pink-500 transition">SpaceX</span>
          </div>
          {/* Flare effect */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-400 opacity-40 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 opacity-40 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </main>
    </div>
  );
}

