import { Link, useLocation } from "react-router-dom";
import { slugTransform } from "../../helperFoo/slugify";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import s from "./MovieSimpleCard.module.css";

export default function MovieSimpleCard({ movie }) {
  const { title, id, poster_path } = movie;

  const location = useLocation();
  const titlePath = slugTransform(title);
  return (
    <Link
      to={`/movies/${titlePath}-${id}`}
      state={{
        from: location,
        // label: location.state.label,
      }}
      className={s.linkCard}
    >
      <div className={s.posterThumb}>
        {poster_path && (
          <LazyLoadImage
            className="poster"
            effect="blur"
            alt={title}
            src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster_path}`}
            height="450"
          />
        )}
      </div>
      <p className={s.title}>{title}</p>
    </Link>
  );
}
