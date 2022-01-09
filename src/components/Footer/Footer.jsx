import { MainContainer } from "../UtilsStyledComponents";
import { FooterEl, AuthorInfoThumb } from "./Footer.styled";
import movieDBlogo from "../../images/moviedb-logo.png";

export default function Footer() {
  return (
    <MainContainer>
      <FooterEl>
        <AuthorInfoThumb>
          <span>©</span>
          <span>2022</span>
          <a
            href="https://github.com/MarinaTripetska"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to author's github"
          >
            github
          </a>
        </AuthorInfoThumb>

        <a
          href="https://goit.ua/fullstackonline/ua/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to course"
        >
          GoIT School
        </a>

        <a
          href="https://www.themoviedb.org/?language=uk"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to data base MovieDB"
        >
          <img src={movieDBlogo} alt="" width="60" height="60" />
        </a>
      </FooterEl>
    </MainContainer>
  );
}
