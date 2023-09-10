import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'Service/MovieAPI';
import MovieList from 'components/MoviesList/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies()
      .then(results => {
        setMovies(results);
        setError(null);
      })
      .catch(error => {
        setError('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && 'Loading ...'}
      {movies && <MovieList list={movies} />}
    </div>
  );
}

export default Home;
