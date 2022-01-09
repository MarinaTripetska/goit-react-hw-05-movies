import { Suspense, lazy } from "react";
import { useParams, Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovieById } from "../../API/get";
import defaultImage from "../../images/movie-poster.jpg";
import MainLoader from "../Loaders/MainLoader";
import SmallLoader from "../Loaders/SmallLoader";
import { Title } from "../UtilsStyledComponents";
import { NavigationCastReview } from "../NavigationCastReview";
import {
  MovieThumb,
  PosterPart,
  Poster,
  InfoPart,
  Overview,
  GenresThumb,
  PositionName,
  GenresList,
  Value,
  CompanyLogoThumb,
  CompanyLogo,
  CompaniesList,
  Tagline,
} from "./MovieBigView.styled";
import { AiOutlineStar } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";

const Cast = lazy(() => import("../Cast" /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import("../Reviews" /* webpackChunkName: "reviews" */)
);

export default function Movie() {
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
    const {
      poster_path: poster,
      genres,
      title,
      tagline,
      overview,
      budget,
      release_date,
      runtime,
      original_language,
      vote_average,
      production_companies,
    } = movie;
    const companiesWithLogo = production_companies.filter(
      (c) => c.logo_path && c
    );
    return (
      <>
        <MovieThumb>
          <PosterPart>
            {tagline && <Tagline>"{tagline}"</Tagline>}
            <Poster
              src={
                poster
                  ? `https://www.themoviedb.org/t/p/w440_and_h660_face/${poster}`
                  : defaultImage
              }
              alt={title}
            />
          </PosterPart>
          <InfoPart>
            <Title Atr={"h2"} text={title} color="#9c9c9c" />

            <Overview>{overview}</Overview>
            <p>
              <FaRegCalendarAlt color="#eead71" aria-label="Release date" />
              <Value>{release_date}</Value>
            </p>
            <p>
              <AiOutlineStar
                color="#eead71"
                aria-label="User rating of the movie"
              />
              <Value>{vote_average}</Value>
            </p>
            <p>
              <PositionName>Budget:</PositionName>
              <Value>{budget}$</Value>
            </p>
            <p>
              <PositionName>Duration: </PositionName>
              <Value>{runtime} min</Value>
            </p>
            <p>
              <PositionName>Original language:</PositionName>
              <Value>{original_language}</Value>
            </p>
            {genres && (
              <GenresThumb>
                <PositionName>Genres:</PositionName>
                <GenresList>
                  {genres.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                  })}
                </GenresList>
              </GenresThumb>
            )}
            {production_companies && (
              <>
                <PositionName as="p">Production companies: </PositionName>

                <CompaniesList>
                  {companiesWithLogo.map((c) => (
                    <li key={c.id}>
                      <CompanyLogoThumb>
                        <CompanyLogo
                          src={`https://www.themoviedb.org/t/p/original/${c.logo_path}`}
                          alt="production companies logo"
                        />
                      </CompanyLogoThumb>
                    </li>
                  ))}
                </CompaniesList>
              </>
            )}
          </InfoPart>
        </MovieThumb>

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
