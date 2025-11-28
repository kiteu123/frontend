import React, { useState, useMemo, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Calendar,
  Star,
  Sun,
  Moon,
  X,
} from "lucide-react";

// Sample movie dataset
// NOTE: In a real app, use an API key and fetch real data from TMDB/OMDB.
const SAMPLE_MOVIES = [
  {
    id: 1,
    title: "The Last Horizon",
    year: 2023,
    genres: ["Sci-Fi", "Adventure"],
    rating: 8.1,
    popularity: 91,
    overview:
      "In a near future where the sky has changed, a mismatched crew travels beyond the known horizon to find a new home.",
    poster:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cafe Midnight",
    year: 2021,
    genres: ["Drama", "Romance"],
    rating: 7.3,
    popularity: 67,
    overview:
      "A late-night cafe brings together strangers whose stories slowly weave into an unexpected family.",
    poster:
      "https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Heist at Dawn",
    year: 2019,
    genres: ["Action", "Thriller"],
    rating: 7.9,
    popularity: 82,
    overview:
      "A team of specialists plans one last job — but the plan unwinds under unexpected pressures.",
    poster:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Starlit Notes",
    year: 2020,
    genres: ["Music", "Drama"],
    rating: 8.5,
    popularity: 74,
    overview:
      "A prodigious musician returns to their hometown and rediscovers the songs they once lost.",
    poster:
      "https://images.unsplash.com/photo-1507878866276-a947ef722fee?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "The Silent Forest",
    year: 2022,
    genres: ["Horror", "Mystery"],
    rating: 6.8,
    popularity: 60,
    overview:
      "When a remote village goes silent, a teacher comes to unravel the secret beneath the trees.",
    poster:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80&auto=format&fit=crop",
  },
  // Additional mock data for variety
  {
    id: 6,
    title: "Echoes of Time",
    year: 2018,
    genres: ["Historical", "Drama"],
    rating: 8.2,
    popularity: 79,
    overview:
      "A journey through history following a single object that changes hands across centuries.",
    poster:
      "https://images.unsplash.com/photo-1568992688949-33560f789e90?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Neon City Run",
    year: 2024,
    genres: ["Action", "Sci-Fi"],
    rating: 8.7,
    popularity: 95,
    overview:
      "High-stakes chase in a vibrant, futuristic metropolis. Every second counts.",
    poster:
      "https://images.unsplash.com/photo-1549488337-33f11d1e4e5e?w=800&q=80&auto=format&fit=crop",
  },
];

/**
 * Movie Card Component
 * @param {{ movie: object, onOpen: function }} props
 */
function MovieCard({ movie, onOpen }) {
  const ratingColor = movie.rating >= 8.0 ? "text-yellow-400" : "text-gray-400";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden cursor-pointer border border-gray-100 dark:border-gray-700">
      {/* Poster Image Area */}
      <div className="relative pb-[140%] group" onClick={() => onOpen(movie)}>
        <img
          src={movie.poster}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/600x900/1f2937/ffffff?text=Poster+Missing";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
          <button className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 transition duration-200">
            상세 정보 보기
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-xl truncate text-gray-900 dark:text-gray-50">
            {movie.title}
          </h3>
          <span
            className={`flex items-center text-sm font-medium ${ratingColor}`}
          >
            <Star className="w-4 h-4 mr-1 fill-current" />
            {movie.rating.toFixed(1)}
          </span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{movie.year}</span>
          </div>
          <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 px-2 py-0.5 rounded-full text-xs font-medium">
            {movie.genres[0]}
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Movie Modal Component
 * @param {{ movie: object | null, onClose: function }} props
 */
function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/70 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/30 backdrop-blur-md rounded-full text-white hover:bg-white/50 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:flex">
          {/* Poster */}
          <div className="md:w-1/3 flex-shrink-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-80 md:h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x900/1f2937/ffffff?text=Poster+Missing";
              }}
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 md:w-2/3">
            <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
              {movie.title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">
              ({movie.year})
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {movie.genres.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full font-medium text-gray-700 dark:text-gray-200"
                >
                  {g}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">줄거리</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {movie.overview}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <div className="flex items-center gap-4 text-lg">
                <span className="font-medium text-gray-500 dark:text-gray-400">
                  평점:
                </span>
                <strong className="flex items-center text-2xl font-bold text-yellow-500">
                  <Star className="w-6 h-6 mr-1 fill-yellow-500" />
                  {movie.rating.toFixed(1)}
                </strong>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition shadow-md"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Main Application Component
 */
export default function App() {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [yearRange, setYearRange] = useState([
    2000,
    new Date().getFullYear() + 1,
  ]);
  const [openMovie, setOpenMovie] = useState(null);
  const [movies] = useState(SAMPLE_MOVIES);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to manage Dark Mode class on HTML element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const genres = useMemo(() => {
    const s = new Set();
    movies.forEach((m) => m.genres.forEach((g) => s.add(g)));
    return ["All", ...Array.from(s)].sort();
  }, [movies]);

  const filtered = useMemo(() => {
    return movies
      .filter((m) => m.title.toLowerCase().includes(query.toLowerCase()))
      .filter((m) =>
        selectedGenre === "All" ? true : m.genres.includes(selectedGenre)
      )
      .filter((m) => m.year >= yearRange[0] && m.year <= yearRange[1])
      .sort((a, b) => {
        if (sortBy === "popularity") return b.popularity - a.popularity;
        if (sortBy === "year") return b.year - a.year;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [movies, query, selectedGenre, yearRange, sortBy]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Ensure year range inputs are valid numbers
  const handleYearChange = (index, value) => {
    const newYear = Number(value);
    if (isNaN(newYear)) return;

    if (index === 0) {
      setYearRange([newYear, yearRange[1]]);
    } else {
      setYearRange([yearRange[0], newYear]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Header & Search Bar */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg shadow-md">
        <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Title */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
              🎬 MOVIE SHOWCASE
            </h1>
          </div>

          {/* Search Input */}
          <div className="w-full max-w-lg relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full focus:ring-2 focus:ring-indigo-500 focus:bg-white dark:focus:bg-gray-900 transition outline-none shadow-inner"
              placeholder="제목으로 영화 검색..."
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        {/* Filter Section */}
        <section className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Genre Filter */}
              <div className="relative">
                <select
                  className="appearance-none block w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg py-2 px-4 pr-8 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition"
                  value={selectedGenre}
                  onChange={(e) => setSelectedGenre(e.target.value)}
                >
                  {genres.map((g) => (
                    <option key={g} value={g}>
                      장르: {g}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500" />
              </div>

              {/* Sort By Filter */}
              <div className="relative">
                <select
                  className="appearance-none block w-full bg-gray-100 dark:bg-gray-700 border-none rounded-lg py-2 px-4 pr-8 text-sm font-medium focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer transition"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popularity">정렬: 인기순</option>
                  <option value="year">정렬: 최신순</option>
                  <option value="rating">정렬: 평점순</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-500" />
              </div>
            </div>

            {/* Year Range Filter */}
            <div className="flex items-center gap-3 text-sm">
              <label className="text-gray-600 dark:text-gray-300 font-medium">
                개봉 연도:
              </label>
              <input
                type="number"
                value={yearRange[0]}
                onChange={(e) => handleYearChange(0, e.target.value)}
                className="w-20 rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-center focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />
              <span className="text-gray-500">—</span>
              <input
                type="number"
                value={yearRange[1]}
                onChange={(e) => handleYearChange(1, e.target.value)}
                className="w-20 rounded-lg px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-center focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 font-medium">
            <span className="text-indigo-600 dark:text-indigo-400 font-bold">
              {filtered.length}
            </span>
            개의 결과가 검색되었습니다.
          </div>
        </section>

        {/* Movie Grid Section */}
        <section>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filtered.map((m) => (
                <MovieCard key={m.id} movie={m} onOpen={setOpenMovie} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
                검색 결과가 없습니다.
              </h2>
              <p className="text-gray-500 mt-2">
                다른 검색어/필터 조건을 사용해 보세요.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto p-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t mt-12 border-gray-200 dark:border-gray-700">
        © {new Date().getFullYear()} Movie Showcase Redesign · Tailwind CSS &
        React
      </footer>

      {/* Modal */}
      <MovieModal movie={openMovie} onClose={() => setOpenMovie(null)} />
    </div>
  );
}
