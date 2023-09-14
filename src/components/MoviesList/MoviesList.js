import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

function MovieList({ list }) {
  const location = useLocation();

  return (
    <div>
      <ul className={css.UlStyle}>
        {list.map(({ title, id }) => (
          <li key={id}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css.Stylelinks}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

MovieList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
