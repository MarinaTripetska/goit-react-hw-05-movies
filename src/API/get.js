import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

const fetchMovie = async (request) => {
  try {
    const resp = await api.get(
      `${request}?api_key=d5c0d1b8be0f887d4d98094b30567821`
    );
    return resp;
  } catch (err) {
    console.log(err);
  }
};

const fetchSearchMovie = async (query) => {
  try {
    const resp = await api.get(
      `search/movie?api_key=d5c0d1b8be0f887d4d98094b30567821&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export { fetchMovie, fetchSearchMovie };
