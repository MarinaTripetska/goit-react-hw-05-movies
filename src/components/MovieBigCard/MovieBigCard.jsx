import PropTypes from "prop-types";
import { Title, Section, MainContainer } from "../UtilsStyledComponents";
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
} from "./MovieBigCard.styled";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

export default function MovieBigCard({ movie }) {
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
    <Section>
      <MainContainer>
        <MovieThumb>
          <PosterPart>
            {tagline && <Tagline>"{tagline}"</Tagline>}

            {poster ? (
              <Poster
                src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${poster}`}
                alt={title}
              />
            ) : null}
          </PosterPart>
          <InfoPart>
            <Title Atr={"h2"} text={title} />

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
      </MainContainer>
    </Section>
  );
}

MovieBigCard.propTypes = {
  movie: PropTypes.object.isRequired,
};
