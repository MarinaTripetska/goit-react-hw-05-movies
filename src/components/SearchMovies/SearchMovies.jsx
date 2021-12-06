import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import slugify from "slugify";
import PropTypes from "prop-types";

import { fetchSearchMovie } from "../../API/get";

export default function SearchMovies() {
  const [searchInput, setSearchInput] = useState("");
  const [searchMovies, setSearchMovies] = useState(null);

  const location = useLocation();
  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchInput.trim() === "") {
      window.alert("Please, provide search movie!");
      setSearchInput("");
      return;
    }

    fetchSearchMovie(searchInput.toLowerCase().trim()).then((resp) =>
      setSearchMovies(resp.data.results)
    );
    setSearchInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span>Search</span>
        </button>

        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={(e) => setSearchInput(e.currentTarget.value)}
          value={searchInput}
        />
      </form>

      <ul>
        {searchMovies &&
          searchMovies.map((movie) => {
            const movieSlugify = slugify(movie.title, {
              lower: true,
              strict: true,
            });

            return (
              <li key={movie.id}>
                <Link
                  to={`${movieSlugify}-${movie.id}`}
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
    </>
  );
}

SearchMovies.defaultProps = {
  onSubmit: () => null,
};

SearchMovies.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
