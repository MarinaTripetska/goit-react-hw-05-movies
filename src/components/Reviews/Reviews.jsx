import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchMovie } from "../../API/get";
export default function Reviews() {
  const [reviews, setReviews] = useState(null);

  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    fetchMovie(`movie/${movieID}/reviews`).then((resp) =>
      setReviews(resp.data.results)
    );
  }, [movieID]);

  return (
    <section>
      <h2>Reviews</h2>
      <ul>
        {reviews &&
          reviews.map((r) => {
            return (
              <li key={r.id}>
                <p>{r.author}</p>

                <p>{r.content}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
}
