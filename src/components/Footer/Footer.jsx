import { MainContainer, Section } from "../UtilsStyledComponents";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <Section>
        <MainContainer>
          <h3>Footer</h3>
          <p>Here will be info about technologies and author</p>
        </MainContainer>
      </Section>
    </footer>
  );
}
