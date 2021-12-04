import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import fetchPopularMovies from "../../API/get";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchPopularMovies("/trending/movie/week").then((resp) =>
      setMovies(resp.data.results)
    );
  }, []);

  return (
    <main>
      <h1>Home page</h1>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
                  alt={movie.title}
                  width="250"
                />
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
}
