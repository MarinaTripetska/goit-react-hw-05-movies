import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import defaultImage from "../../images/movie-poster.jpg";

export const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 5px;
  width: 100%;
  height: 100%;

  background-color: var(--card-bg-color);
  border: solid 2px #354d3e;
  border-radius: 5px;

  cursor: pointer;

  &:hover,
  &:focus {
    transform: translateY(-5px);
    box-shadow: 0 0 20px 10px #75db9c, 0 0 5px 5px #fff,
      0 2px 2px rgb(0 0 0 / 12%);
    transition: all 0.5s ease-out;
  }
`;

export const PosterThumb = styled.div`
  width: 100%;
  height: 370px;

  background-color: rgb(212, 212, 212);
  background-image: url(${defaultImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (min-width: 330px) {
    & {
      height: 429px;
    }
  }
`;

export const InfoThumb = styled.div`
  padding: 5px 10px;
`;

export const Title = styled.h3`
  text-align: center;

  color: #fff9f9;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  text-transform: uppercase;

  margin-bottom: 10px;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;

  color: #c2c998;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.3;
`;
