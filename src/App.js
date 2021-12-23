import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainLoader from "./components/Loaders/MainLoader";

const HomePage = lazy(() =>
  import("./views/HomePage" /* webpackChunkName: "page-home" */)
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage" /* webpackChunkName: "page-movies" */)
);
const MovieBigView = lazy(() =>
  import("./components/MovieBigView" /* webpackChunkName: "movie-big-view" */)
);
const PageNotFound = lazy(() =>
  import("././views/PageNotFound" /* webpackChunkName: "page-not-found" */)
);
const SearchMovies = lazy(() =>
  import(
    "./components/SearchMovies" /* webpackChunkName: "movies-search-view" */
  )
);
function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<MainLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />}>
            <Route index element={<SearchMovies />} />
            <Route path=":slug/*" element={<MovieBigView />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
