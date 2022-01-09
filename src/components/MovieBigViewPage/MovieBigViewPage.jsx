import { Suspense, lazy } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieById } from "../../API/get";
import MainLoader from "../Loaders/MainLoader";
import SmallLoader from "../Loaders/SmallLoader";
import { NavigationCastReview } from "../NavigationCastReview";
import MovieBigCard from "components/MovieBigCard/MovieBigCard";

const Cast = lazy(() => import("../Cast" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "reviews" */)
);

export default function MovieBigViewPage() {
  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];

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
    return <p>Something went wrong... {error.message}</p>;
  }

  if (movie && isSuccess) {
    return (
      <>
        <MovieBigCard movie={movie} />

        <NavigationCastReview />

        <Suspense fallback={<SmallLoader />}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </>
    );
  }
}
