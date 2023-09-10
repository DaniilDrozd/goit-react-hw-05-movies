import React, { useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieInfo } from 'Service/MovieAPI';

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const backLink = '/';

  useEffect(() => {
    setLoading(true);
    getMovieInfo(movieId)
      .then(response => {
        setMovie(response);
        setError(null);
      })
      .catch(error => {
        setError('Something went wrong');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return (
    <div>
      <Link to={backLink}>Go back</Link>
      {error && <div>{error}</div>}
      {loading && 'Loading ...'}
      {movie && (
        <div>
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
            }
            alt={movie.title}
            width="200"
            height="300"
          />

          <h2>{movie.title}</h2>
          <p>User Score: {Math.round(movie.vote_average * 10)} %</p>
          <div>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h3>Genres</h3>
            <div>
              {movie.genres.map(({ name, id }) => {
                return <p key={id}>{name}</p>;
              })}
            </div>
          </div>
        </div>
      )}
      <div>
        <ul>
          <li>
            <Link to={`cast`} state={{ from: backLink }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={`reviews`} state={{ from: backLink }}>
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
