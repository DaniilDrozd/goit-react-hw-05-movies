import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'Service/MovieAPI';
import MoviesList from 'components/MoviesList/MoviesList';

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState('');

  const handleChange = event => {
    setMovie(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: movie });
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const query = searchParams.get('query') || 'default_query';
      try {
        const results = await getSearchMovies(query);
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
      {list && Array.isArray(list) && <MoviesList list={list} />}
    </div>
  );
}

export default Movies;