import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

const getPopularMovie = async () => {
  const resp = await api.get(
    `trending/movie/week?api_key=d5c0d1b8be0f887d4d98094b30567821`
  );
  return resp.data.results;
};

const getMovieById = async (id) => {
  const resp = await api.get(
    `movie/${id}?api_key=d5c0d1b8be0f887d4d98094b30567821`
  );
  return resp.data;
};

const getReviewsById = async (id) => {
  const resp = await api.get(
    `movie/${id}/reviews?api_key=d5c0d1b8be0f887d4d98094b30567821`
  );
  return resp.data.results;
};

const getCastById = async (id) => {
  const resp = await api.get(
    `movie/${id}/casts?api_key=d5c0d1b8be0f887d4d98094b30567821`
  );
  return resp.data.cast;
};

const fetchMovie = async (request) => {
  const resp = await api.get(
    `${request}?api_key=d5c0d1b8be0f887d4d98094b30567821`
  );
  return resp;
};

const fetchSearchMovies = async (query, page) => {
  const resp = await api.get(
    `search/movie?api_key=d5c0d1b8be0f887d4d98094b30567821&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  return resp.data;
};

export {
  fetchMovie,
  fetchSearchMovies,
  getPopularMovie,
  getMovieById,
  getReviewsById,
  getCastById,
};
