import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock the fetch API to avoid actual backend calls during testing
global.fetch = jest.fn();

beforeEach(() => {
  fetch.mockClear();
});

// Checks that page title, label and button are rendered correctly on initial load.
test('renders the title and initial UI elements', () => {
  render(<App />);
  expect(screen.getByText(/Movie Recommender/i)).toBeInTheDocument();
  expect(screen.getByText(/Minimum Rating:/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Show Movies/i })).toBeInTheDocument();
});

// Checks that the "No movies found" message is displayed when the movies array is empty on initial load.
test('displays no movies message on initial load', () => {
  render(<App />);
  expect(screen.getByText(/No movies found/i)).toBeInTheDocument();
});

// Verifies data is rendered correctly when the "Show Movies" button is clicked and the backend returns a list of movies.
test('fetches movies when Show Movies button is clicked', async () => {
  const mockMovies = [
    { title: 'Movie 1', rating: 8.5 },
    { title: 'Movie 2', rating: 7.2 },
  ];

  fetch.mockResolvedValueOnce({
    json: async () => mockMovies,
  });

  render(<App />);
  const button = screen.getByRole('button', { name: /Show Movies/i });
  
  await act(async () => {
    fireEvent.click(button);
  });

  await waitFor(() => {
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

  expect(fetch).toHaveBeenCalledWith('http://localhost:8000/movies?min_rating=0');
});

// Test when you change the rating filter the correct API endpoint is called with the selected min_rating value. 
test('uses correct min_rating when fetching movies', async () => {
  fetch.mockResolvedValueOnce({
    json: async () => [],
  });

  render(<App />);
  const select = screen.getByDisplayValue('0+');
  
  await act(async () => {
    await userEvent.selectOptions(select, '7');
    fireEvent.click(screen.getByRole('button', { name: /Show Movies/i }));
  });

  expect(fetch).toHaveBeenCalledWith('http://localhost:8000/movies?min_rating=7');
});

// If API call fails, it should alert the user with a message "Could not fetch movies from backend." and not crash the app. 
test('handles fetch errors gracefully', async () => {
  fetch.mockRejectedValueOnce(new Error('Network error'));
  
  const alertSpy = jest.spyOn(window, 'alert').mockImplementation();
  
  render(<App />);
  
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /Show Movies/i }));
  });

  await waitFor(() => {
    expect(alertSpy).toHaveBeenCalledWith('Could not fetch movies from backend.');
  });

  alertSpy.mockRestore();
});


