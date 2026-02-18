import React, { useState } from "react";
import MovieList from "./MovieList";
import "./App.css"; // custom styles

const genres = [
  { id: "", name: "All Genres" },
  { id: "28", name: "Action" },
  { id: "35", name: "Comedy" },
  { id: "18", name: "Drama" },
  { id: "27", name: "Horror" },
  { id: "10749", name: "Romance" },
  { id: "878", name: "Sci-Fi" },
];

function App() {
  const [minRating, setMinRating] = useState(0);
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  const backendUrl = "http://localhost:8000/movies"; // or http://backend:8000 in Docker

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${backendUrl}?min_rating=${minRating}&genre=${selectedGenre}`);
      const data = await response.json();
      setMovies(data);
    } catch (err) {
      console.error(err);
      alert("Could not fetch movies from backend.");
    }
  };

  return (
    <div className="app">
      <h1 className="title">🎬 Movie Recommender</h1>

      <div className="controls">
        {/* Rating Filter */}
        <div className="filter-group">
          <label htmlFor="min_rating">Minimum Rating:</label>
          <select
            id="min_rating"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
          >
            {Array.from({ length: 11 }, (_, i) => (
              <option key={i} value={i}>
                {i}+
              </option>
            ))}
          </select>
        </div>

        {/* New Genre Filter */}
        <div className="filter-group">
          <label htmlFor="genre_select">Genre:</label>
          <select
            id="genre_select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
          >
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        <button onClick={fetchMovies}>Show Movies</button>
      </div>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
