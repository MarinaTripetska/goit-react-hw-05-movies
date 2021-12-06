import { useState, useEffect } from "react";
import {
  Link,
  useParams,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";

import { fetchMovie } from "../../API/get";
import GoBackButton from "../GoBackBatton/GoBackButton";

export default function Movie() {
  const [movie, setMovie] = useState(null);

  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    fetchMovie(`movie/${movieID}`).then((resp) => setMovie(resp.data));
  }, [movieID]);

  const onGoBack = () => {
    navigate(location.state?.from ? `${location.state?.from}` : "/");
  };

  return (
    movie && (
      <div>
        <GoBackButton />
        {/* <button onClick={onGoBack}>Go back</button> */}
        <img
          src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
          alt={movie.title}
          width="250"
        />
        <Link to={`cast`} state={{ from: location.state?.from }}>
          Cast
        </Link>
        <Link to={`reviews`} state={{ from: location.state?.from }}>
          Revives
        </Link>
        <Outlet />
      </div>
    )
  );
}
