import { useQuery } from "react-query";
import { getPopularMovie } from "API/get";
import MovieList from "components/MovieList";
import {
  MainContainer,
  Section,
  Title,
} from "components/UtilsStyledComponents";
import MainLoader from "components/Loaders/MainLoader";

export default function HomePage() {
  const {
    data: movies,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useQuery("popularMovies", () => getPopularMovie("trending/movie/week"), {
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    select: (data) =>
      data.map((movie) => {
        const { title, id, poster_path, release_date, vote_average } = movie;
        return { title, id, poster_path, release_date, vote_average };
      }),
  });

  if (isError) {
    return <p>Ooops... Something went wrong! Error: {error.message}</p>;
  }
  if (isLoading) {
    return <MainLoader />;
  }
  if (isSuccess && movies.length > 0) {
    return (
      <>
        <main>
          <Section>
            <MainContainer>
              <Title text="Home page" />
              <MovieList movies={movies} />
            </MainContainer>
          </Section>
        </main>
      </>
    );
  }
}
