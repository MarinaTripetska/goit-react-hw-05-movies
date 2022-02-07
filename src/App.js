import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "components/NavBar";
import MainLoader from "components/Loaders/MainLoader";
import Footer from "components/Footer/Footer";

const load = (componentPath) => lazy(() => import(`./${componentPath}`));

const HomePage = load("views/HomePage");
const MoviesPage = load("views/MoviesPage");
const MovieBigViewPage = load("components/MovieBigViewPage");
const SearchMovies = load("components/SearchMovies");
const PageNotFound = load("views/PageNotFound");

function App() {
  return (
    <>
      <NavBar />

      <Suspense fallback={<MainLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/movies" element={<MoviesPage />}>
            <Route index element={<SearchMovies />} />
            <Route path=":slug/*" element={<MovieBigViewPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
