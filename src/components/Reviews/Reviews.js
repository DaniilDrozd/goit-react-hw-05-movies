import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../Service/MovieAPI';
import css from './Reviews.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [, setError] = useState(null);
  const [, setLoading] = useState(false);

  useEffect(() => {
    const Reviews = async () => {
      setLoading(true);

      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
        setError(null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    Reviews();
  }, [movieId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul className={css.reviews}>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
};

export default Reviews;
