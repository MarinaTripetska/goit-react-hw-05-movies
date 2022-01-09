import styled from "@emotion/styled";
import defaultImage from "../../images/movie-poster.jpg";

export const MovieThumb = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  padding: 30px 5px;
  gap: 10px;

  border-radius: 2px;
  background-image: linear-gradient(180deg, #334439, #151b17);
  box-shadow: 0 5px 7px 2px #45815b, 0 5px 7px 2px #2a2a2a,
    0 2px 2px rgb(0 0 0 / 12%);

  @media screen and (min-width: 450px) {
    padding: 40px 20px;
    gap: 30px;
  }

  @media screen and (min-width: 1000px) {
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: nowrap;
  }
`;

export const PosterPart = styled.div`
  flex: 2 0 100%;
  position: relative;
  background-color: #bebebe;
  background-image: url(${defaultImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 320px;

  @media (min-width: 310px) {
    max-width: 250px;
    min-height: 330px;
  }

  @media (min-width: 430px) {
    max-width: 380px;
    min-height: 500px;
  }
  @media (min-width: 560px) {
    max-width: 500px;
    min-height: 700px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const InfoPart = styled.div`
  flex: 0 1 100%;
  align-self: stretch;
`;

export const Overview = styled.p`
  font-style: italic;
  margin-bottom: 25px;
  color: #8aa54c;
`;

export const GenresThumb = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const GenresList = styled.ul`
  list-style: inside;
  display: flex;
  justify-content: flex-start;
  column-gap: 5px;
  flex-wrap: wrap;
  color: #8aa54c;
  padding-left: 15px;

  @media (min-width: 450px) {
    column-gap: 15px;
  }

  li {
    white-space: nowrap;
  }
`;
export const PositionName = styled.span`
  font-weight: 700;
  margin-bottom: 10px;

  color: var(--main-txt-color);
`;
export const Value = styled.span`
  color: #8aa54c;
  font-size: 16px;
  font-weight: 300;
  padding-left: 15px;
`;

export const CompaniesList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CompanyLogoThumb = styled.div`
  background-color: rgba(137, 151, 142, 0.719);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CompanyLogo = styled.img`
  object-fit: cover;
  object-position: center;
`;

export const Tagline = styled.p`
  color: var(--txt-color);
  font-style: italic;
  text-align: center;

  position: absolute;
  top: -30px;
  left: 30px;
`;
