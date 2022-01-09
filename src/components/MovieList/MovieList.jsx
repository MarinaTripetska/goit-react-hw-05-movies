import MovieSimpleCard from "../MovieSimpleCard";
import PropTypes from "prop-types";
import { List, Item } from "./MovieList.styled";

export default function MovieList({ movies }) {
  return (
    <List>
      {movies.map((movie) => (
        <Item key={movie.id}>
          <MovieSimpleCard movie={movie} />
        </Item>
      ))}
    </List>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
