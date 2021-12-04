import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
});

const fetchPopularMovies = async (request) => {
  try {
    const resp = await api.get(
      `${request}?api_key=d5c0d1b8be0f887d4d98094b30567821`
    );
    return resp;
  } catch (err) {
    console.log(err);
  }
};

export default fetchPopularMovies;
