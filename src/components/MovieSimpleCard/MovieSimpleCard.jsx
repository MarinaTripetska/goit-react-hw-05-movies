import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { slugTransform } from "../../helperFoo/slugify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import defaultImage from "../../images/movie-poster.jpg";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import {
  CardLink,
  PosterThumb,
  InfoThumb,
  Title,
  Info,
} from "./MovieSimpleCard.styled";

export default function MovieSimpleCard({ movie }) {
  const { title, id, poster_path, release_date, vote_average } = movie;

  const location = useLocation();
  const titlePath = slugTransform(title);

  return (
    <CardLink
      to={`/movies/${titlePath}-${id}`}
      state={{
        from: location,
      }}
    >
      <PosterThumb>
        {poster_path && (
          <LazyLoadImage
            effect="blur"
            alt={"Poster of:" + title}
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
            placeholderSrc={defaultImage}
          />
        )}
      </PosterThumb>

      <InfoThumb>
        <Title>{title}</Title>

        <Info>
          <FaRegCalendarAlt aria-label="Release date" />
          {release_date}
        </Info>

        <Info>
          <AiOutlineStar aria-label="User rating of the movie" />
          {vote_average}
        </Info>
      </InfoThumb>
    </CardLink>
  );
}

MovieSimpleCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};
