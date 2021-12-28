import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { slugTransform } from "../../helperFoo/slugify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import defaultImage from "../../images/movie-poster.jpg";
import s from "./MovieSimpleCard.module.css";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function MovieSimpleCard({ movie }) {
  const { title, id, poster_path, release_date, vote_average } = movie;

  const location = useLocation();
  const titlePath = slugTransform(title);

  return (
    <Link
      to={`/movies/${titlePath}-${id}`}
      state={{
        from: location,
      }}
      className={s.linkCard}
    >
      <div className={s.posterThumb}>
        {poster_path && (
          <LazyLoadImage
            effect="blur"
            alt={"Poster of:" + title}
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
            placeholderSrc={defaultImage}
            className={s.poster}
          />
        )}
      </div>
      <div className={s.infoThumb}>
        <p className={s.title}>{title}</p>
        <p className={s.info}>
          <FaRegCalendarAlt aria-label="Release date" />
          {release_date}
        </p>
        <p className={s.info}>
          <AiOutlineStar aria-label="User rating of the movie" />
          {vote_average}
        </p>
      </div>
    </Link>
  );
}
MovieSimpleCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};
