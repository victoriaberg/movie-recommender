import React from "react";
import "./MovieList.css";

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p className="no-results">No movies found for the selected rating.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie, index) => (
        <div key={index} className="movie-card">
          <h3>{movie.title}</h3>
          <span className="rating">{movie.rating}</span>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
