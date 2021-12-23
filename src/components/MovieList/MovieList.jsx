import MovieSimpleCard from "../MovieSimpleCard";
import PropTypes from "prop-types";
import s from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <MovieSimpleCard movie={movie} />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
