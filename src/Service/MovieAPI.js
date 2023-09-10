import axios from 'axios';

const API_KEY = '7a96b7d3f2fd15994813e6eeb1d3cb9e';
const baseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/week?api_key=${API_KEY}&page=1&language=en-US&include_adult=false`
  );
  return response.data;
};

export function searchMovies(query, page) {
  return axios.get(`${baseUrl}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
}

export const getMovieInfo = async movieId => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}`);
  return response.data;
};

export async function getMovieCredits(movieId) {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/credits`);
  return response.data;
}

export const getMovieReviews = async movieId => {
  const response = await axios.get(`${baseUrl}/movie/${movieId}/reviews`);
  return response.data.results;
};
