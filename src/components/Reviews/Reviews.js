import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovieReviews } from 'Service/MovieAPI';

const Reviews = () => {
  const location = useLocation();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const movieId = location.pathname.split('/').pop();
        const results = await getMovieReviews(movieId);
        setReviews(results);
        setError(null);
      } catch (error) {
        setError('Something went wrong');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location]);

  return (
    <div>
      {error && <div>{error}</div>}
      {loading ? (
        'Loading'
      ) : (
        <ul>
          {reviews &&
            reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
