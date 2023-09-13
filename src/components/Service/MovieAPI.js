import axios from 'axios';

const API_KEY = '7a96b7d3f2fd15994813e6eeb1d3cb9e';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const getTrendingMovies = async ({ page }) => {
  const params = {
    page,
  };
  const response = await axios.get(`/trending/movie/day`, { params });
  return response.data;
};

export const getSearchMovies = async (query, page) => {
  const params = {
    query,
    page,
  };
  const response = await axios.get(`/search/movie`, { params });
  return response.data;
};

export const getMovieInfo = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews?`);
  return response.data.results;
};
