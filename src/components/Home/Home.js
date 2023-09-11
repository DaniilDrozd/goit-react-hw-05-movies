import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'Service/MovieAPI';
import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getTrendingMovies({ page: 1 })
      .then(results => {
        setMovies(results.results);
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
      {loading ? 'Loading ' : <MoviesList list={movies} />}{' '}
    </div>
  );
}

export default Home;
