import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'components/Service/MovieAPI';
import MoviesList from 'components/MoviesList/MoviesList';
import css from './Movies.module.css';
function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState('');
  const query = searchParams.get('query');
  const handleChange = event => {
    setMovie(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ query: movie });
  };

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
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
  }, [query]);

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          value={movie}
          autoComplete="off"
          autoFocus
          placeholder="Write movie title"
          name="movie"
          onChange={handleChange}
        />
        <button type="submit" className={css.btn}>
          Search
        </button>
      </form>
      {error && <div>{error}</div>}
      {loading && 'Loading '}
      {list.length > 0 && <MoviesList list={list} />}
    </div>
  );
}

export default Movies;
