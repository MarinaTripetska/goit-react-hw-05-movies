//movie/{movie_id}/credits
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchMovie } from "../../API/get";

export default function Cast() {
  const [cast, setCast] = useState(null);

  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    fetchMovie(`movie/${movieID}/credits`).then((resp) =>
      setCast(resp.data.cast)
    );
  }, [movieID]);

  return (
    <section>
      <h2>Cast</h2>
      <ul>
        {cast &&
          cast.map((c) => {
            return (
              <li key={c.cast_id}>
                <p>Character: {c.character}</p>
                <p>Actor name: {c.name}</p>

                {c.profile_path && (
                  <img
                    src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${c.profile_path}`}
                    alt={c.name}
                    width="150"
                  />
                )}
              </li>
            );
          })}
      </ul>
    </section>
  );
}
