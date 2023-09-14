import React, { useEffect, useState } from 'react';
import { getMovieCredits } from 'components/Service/MovieAPI';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await getMovieCredits(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && 'Loading ...'}
      {cast && (
        <ul className={css.images}>
          {cast.cast.map(({ name, character, profile_path, id }) => (
            <li key={id}>
              <img
                alt={name}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w92${profile_path}`
                    : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
                }
                width=" 160"
                height=" 170"
              />
              <h3>{name} </h3>
              <p>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
