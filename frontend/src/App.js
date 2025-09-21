import React, { useState } from "react";
import MovieList from "./MovieList";
import "./App.css"; // custom styles

function App() {
  const [minRating, setMinRating] = useState(0);
  const [movies, setMovies] = useState([]);

  const backendUrl = "http://localhost:8000/movies"; // or http://backend:8000 in Docker

  const fetchMovies = async () => {
    try {
      const response = await fetch(`${backendUrl}?min_rating=${minRating}`);
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
        <button onClick={fetchMovies}>Show Movies</button>
      </div>

      <MovieList movies={movies} />
    </div>
  );
}

export default App;
