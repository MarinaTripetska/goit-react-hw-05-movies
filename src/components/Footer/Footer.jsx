import Section from "../StyledComponents/Section";
import MainContainer from "../StyledComponents/MainContainer";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <Section className={s.footerBackColor}>
        <MainContainer>
          <h3>Footer</h3>
          <p>Here will be info about technologies and author</p>
        </MainContainer>
      </Section>
    </footer>
  );
}
