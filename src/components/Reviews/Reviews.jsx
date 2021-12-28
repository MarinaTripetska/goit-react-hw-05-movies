import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import SmallLoader from "../Loaders/SmallLoader";
import { getReviewsById } from "../../API/get";
import s from "./Reviews.module.css";

export default function Reviews() {
  const [showMore, setShowMore] = useState(false);
  const { slug } = useParams();
  const section = useRef();

  const movieID = slug.match(/[a-z0-9]+$/)[0];
  const {
    data: reviews,
    isLoading,
    isError,
    error,
    isSuccess,
  } = useQuery(["review", movieID], () => getReviewsById(movieID), {
    enabled: Boolean(movieID),
    staleTime: 60_000 * 10,
  });

  useEffect(() => {
    const sectionDOMElem = section.current;
    if (reviews) {
      sectionDOMElem.scrollIntoView({ behavior: "smooth" });
    }
  }, [reviews]);

  if (isLoading) {
    return <SmallLoader />;
  }

  if (isError) {
    return <p>Something went wrong! Error: {error.message}</p>;
  }

  if (isSuccess) {
    return (
      <div ref={section}>
        <h3 className={s.title}>Reviews</h3>

        {reviews.length !== 0 ? (
          <ul className={s.list}>
            {reviews.map((r) => (
              <li key={r.id} className={s.item}>
                <p className={s.author}>{r.author}</p>

                {r.content.length < 200 || !!showMore ? (
                  <p className={s.txt}>{r.content}</p>
                ) : (
                  <>
                    <p className={s.txt}>{r.content.slice(0, 199) + "..."}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setShowMore(!showMore);
                      }}
                    >
                      Read more
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className={s.noFound}>No reviews here...</p>
        )}
      </div>
    );
  }
}
