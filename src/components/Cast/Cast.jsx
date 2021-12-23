import { useRef, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SmallLoader from "../Loaders/SmallLoader";
import { getCastById } from "../../API/get";
import Section from "../StyledComponents/Section";
import s from "./Cast.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Cast() {
  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];
  const section = useRef();

  const {
    data: cast,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery(["cast", movieID], () => getCastById(movieID), {
    enabled: Boolean(movieID),
    staleTime: 60_000 * 10,
  });

  useEffect(() => {
    const sectionDOMElem = section.current;
    if (cast) {
      sectionDOMElem.scrollIntoView({ behavior: "smooth" });
    }
  }, [cast]);

  if (isLoading) {
    return (
      <Section>
        <SmallLoader />
      </Section>
    );
  }

  if (isError) {
    return (
      <Section>
        <p>Something went wrong... {error}</p>
      </Section>
    );
  }

  if (isSuccess) {
    return (
      <Section ref={section}>
        <h2 className={s.title}>Cast</h2>

        {cast.length > 0 ? (
          <ul className={s.list}>
            {cast.map((c) => (
              <li key={c.cast_id} className={s.item}>
                <p className={s.character}>
                  <span className={s.bold}>Character:</span> {c.character}
                </p>
                <p className={s.actor}>
                  <span className={s.bold}>Actor name:</span> {c.name}
                </p>
                <div className={s.avatarThumb}>
                  {c.profile_path && (
                    <LazyLoadImage
                      effect="blur"
                      alt={c.name}
                      src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${c.profile_path}`}
                      width="130"
                    />
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>The cast not described...</p>
        )}
      </Section>
    );
  }
}
