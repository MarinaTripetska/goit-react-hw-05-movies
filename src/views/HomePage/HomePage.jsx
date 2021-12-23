import { useQuery } from "react-query";
import { getPopularMovie } from "../../API/get";
import MovieList from "../../components/MovieList";
import MainContainer from "../../components/StyledComponents/MainContainer";
import Section from "../../components/StyledComponents/Section";
import MainLoader from "../../components/Loaders/MainLoader";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

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
  });

  if (isError) {
    return <p>Ooops... Something went wrong! Error: {error}</p>;
  }
  if (isLoading) {
    return <MainLoader />;
  }
  if (isSuccess) {
    return (
      <>
        <main className="mainContent">
          <Section>
            <MainContainer>
              <Title text="Home page" Atr="h1" />
              <MovieList movies={movies} />
            </MainContainer>
          </Section>
        </main>
        <Footer />
      </>
    );
  }
}
