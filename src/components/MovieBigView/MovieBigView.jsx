import { Suspense, lazy } from "react";
import {
  NavLink,
  useParams,
  useLocation,
  Routes,
  Route,
} from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieById } from "../../API/get";
import defaultImage from "../../images/movie-poster.jpg";
import MainLoader from "../Loaders/MainLoader";
import SmallLoader from "../Loaders/SmallLoader";
import { Section } from "../UtilsStyledComponents";
import s from "./MovieBigView.module.css";

const Cast = lazy(() => import("../Cast" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "reviews" */)
);

export default function Movie() {
  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];
  const location = useLocation();

  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  const {
    data: movie,
    error,
    isError,
    isLoading,
    isFetching,
    isSuccess,
  } = useQuery(["movie", movieID], () => getMovieById(movieID), {
    enabled: Boolean(movieID),
    keepPreviousData: true,
    staleTime: 60_000 * 10,
  });

  if (isFetching || isLoading) {
    return <MainLoader />;
  }

  if (isError) {
    return (
      <Section>
        <p>Something went wrong... {error.message}</p>
      </Section>
    );
  }

  if (movie && isSuccess) {
    const { poster_path: poster, genres, title, overview } = movie;
    return (
      <>
        <Section>
          <div className={s.movieThumb}>
            <div className={s.posterPart}>
              <img
                className={s.poster}
                src={
                  poster
                    ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${poster}`
                    : defaultImage
                }
                alt={title}
              />
            </div>
            <div className={s.infoPart}>
              <h2 className={s.title}>{title.toUpperCase()}</h2>
              <p className={s.descr}>{overview}</p>
              {genres && (
                <div className={s.genresThumb}>
                  <p className={s.genresTitle}>Genres:</p>
                  <ul className={s.genresList}>
                    {genres.map(({ id, name }) => {
                      return <li key={id}>{name}</li>;
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Section>
        <Section>
          <nav className={s.nav}>
            <NavLink
              className={applyClassName}
              to={`cast`}
              state={{ from: location.state?.from }}
              replace
            >
              Cast
            </NavLink>
            <NavLink
              className={applyClassName}
              to={`reviews`}
              state={{ from: location.state?.from }}
              replace
            >
              Revives
            </NavLink>
          </nav>

          <Suspense fallback={<SmallLoader />}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </Section>
      </>
    );
  }
}
