import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'Service/MovieAPI';
import MovieList from './Movies';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState('');

  const handleChange = e => {
    setMovie(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: movie });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = searchParams.get('query') || 'default_query';
      try {
        const results = await searchMovies(query);
        setList(results);
        setError(null);
      } catch (error) {
        setError('Something went wrong');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movie}
          autoComplete="off"
          autoFocus
          placeholder="Enter movie title"
          name="movie"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <div>{error}</div>}
      {loading && 'Loading '}
      {list && <MovieList list={list} />}
    </div>
  );
}

export default Movies;
