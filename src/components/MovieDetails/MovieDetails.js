import React, { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieInfo } from '../Service/MovieAPI';
import css from './MovieDetails.module.css';
function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  const backLink = '/';

  useEffect(() => {
    const Details = async () => {
      try {
        const movieData = await getMovieInfo(movieId);
        setMovie(movieData);
        setError(null);
      } catch (error) {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    Details();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink} className={css.Back}>
        Go back
      </Link>
      {error && <div>{error}</div>}
      {loading ? (
        'Loading ...'
      ) : movie ? (
        <div className={css.styleDiv}>
          <img
            alt={movie.title}
            src={
              movie && movie.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
            }
            width="200"
            height="300"
          />
          <p className={css.Score}>
            User Score: {Math.round(movie.vote_average * 10)} %
          </p>
          <div>
            <h3 className={css.h3}>Overview</h3>
            <p className={css.overview}>{movie.overview}</p>
          </div>
          <div>
            <h3 className={css.h3}>Genres</h3>
            <div className={css.Genres}>
              {movie.genres.map(({ name, id }) => {
                return <p key={id}>{name}</p>;
              })}
            </div>
          </div>
        </div>
      ) : (
        <p>No movie details available.</p>
      )}
      <div>
        <ul className={css.list}>
          <li>
            <Link to={`cast`} state={{ from: backLink }} className={css.li}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={{ from: backLink }} className={css.li}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default MovieDetails;
