import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

// Ensures that the "No movies found for the selected rating" message is displayed when the movies array is empty.
test('renders no movies message when movies array is empty', () => {
  render(<MovieList movies={[]} />);
  expect(screen.getByText(/No movies found for the selected rating/i)).toBeInTheDocument();
});

// Ensures that the "No movies found for the selected rating" message is displayed when the movies prop is undefined on initial load.
test('renders no movies message when movies is null', () => {
  render(<MovieList movies={null} />);
  expect(screen.getByText(/No movies found for the selected rating/i)).toBeInTheDocument();
});

// Verifies that movie cards render with correct titles when movies data is provided.
test('renders movie cards when movies are provided', () => {
  const mockMovies = [
    { title: 'The Shawshank Redemption', rating: 9.3 },
    { title: 'The Dark Knight', rating: 9.0 },
    { title: 'Inception', rating: 8.8 },
  ];

  render(<MovieList movies={mockMovies} />);

  expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
  expect(screen.getByText('The Dark Knight')).toBeInTheDocument();
  expect(screen.getByText('Inception')).toBeInTheDocument();
});

// Ensures that the movie ratings are displayed correctly for each movie card.
test('renders ratings correctly', () => {
  const mockMovies = [
    { title: 'Movie A', rating: 8.5 },
    { title: 'Movie B', rating: 7.2 },
  ];

  render(<MovieList movies={mockMovies} />);

  expect(screen.getByText('8.5')).toBeInTheDocument();
  expect(screen.getByText('7.2')).toBeInTheDocument();
});

// Ensures that each movie card has the "movie-card" class applied for styling purposes.
test('applies movie-card class to each movie', () => {
  const mockMovies = [
    { title: 'Film 1', rating: 8.0 },
    { title: 'Film 2', rating: 7.5 },
  ];

  const { container } = render(<MovieList movies={mockMovies} />);
  const movieCards = container.querySelectorAll('.movie-card');

  expect(movieCards).toHaveLength(2);
});
