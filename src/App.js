import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./views/HomePage/HomePage";
import MoviesPage from "./views/MoviesPage/MoviesPage";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import Movie from "./components/Movie/Movie";
import Cast from "./components/Cast/Cast";
import Reviews from "./components/Reviews/Reviews";
import SearchMovies from "./components/SearchMovies/SearchMovies";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />}>
          <Route index element={<SearchMovies />} />
          <Route path=":slug" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
