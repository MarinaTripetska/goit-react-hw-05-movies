import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";
import { fetchMovie } from "../../API/get";

export default function HomePage() {
  const [movies, setMovies] = useState(null);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetchMovie("/trending/movie/week").then((resp) =>
      setMovies(resp.data.results)
    );
  }, []);

  return (
    <main>
      <h1>Home page</h1>
      <ul>
        {movies &&
          movies.map((movie) => {
            const movieSlugify = slugify(movie.title, {
              lower: true,
              strict: true,
            });

            return (
              <li key={movie.id}>
                <Link
                  to={`/movies/${movieSlugify}-${movie.id}`}
                  state={{
                    from: location,

                    // label: location.state.label,
                  }}
                >
                  <img
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
                    alt={movie.title}
                    width="250"
                  />
                  <p>{movie.title}</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </main>
  );
}
