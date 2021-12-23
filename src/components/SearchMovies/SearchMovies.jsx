import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useQueryClient, useQuery } from "react-query";
import { fetchSearchMovies } from "../../API/get";
import SearchForm from "../SearchForm";
import MovieList from "../MovieList";
import Pagination from "../Pagination";
import MainLoader from "../Loaders/MainLoader";
import Section from "../StyledComponents/Section";
import MainContainer from "../StyledComponents/MainContainer";
import Title from "../Title";

export default function SearchMovies() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page"));

  const { data, isLoading, isFetching, isError, error, isSuccess } = useQuery(
    ["searchedMovies", query, page],

    () => {
      return fetchSearchMovies(query, page);
    },

    {
      enabled: !!query && !!page,
      staleTime: 60_000 * 10,
      keepPreviousData: true,
    }
  );

  const isLastPage = page === data?.total_pages;

  useEffect(() => {
    if (!query || isLastPage) return;

    queryClient.prefetchQuery(
      ["searchedMovies", query, page + 1],
      () => {
        return fetchSearchMovies(query, page + 1);
      },
      {
        keepPreviousData: true,
        staleTime: 60_000 * 10,
      }
    );
  }, [query, page, isLastPage, queryClient]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data]);

  const newFetch = (newQuery) => {
    if (newQuery === query) return;

    setSearchParams({ query: newQuery, page: 1 });
  };

  const handlePageChange = (step) => {
    setSearchParams({ query, page: page + step });
  };

  return (
    <>
      <Section>
        <MainContainer>
          <Title text="Movies page" Atr="h1" />
          <SearchForm fetchFoo={newFetch} />
        </MainContainer>
      </Section>

      {isLoading || isFetching ? <MainLoader /> : <></>}

      {isError && (
        <Section>
          <MainContainer>
            <p>{error.message}</p>
          </MainContainer>
        </Section>
      )}

      {isSuccess && (
        <Section>
          <MainContainer>
            <MovieList movies={data.results} />
            <Pagination
              page={page}
              setPage={handlePageChange}
              isLastPage={isLastPage}
            />
          </MainContainer>
        </Section>
      )}
    </>
  );
}
