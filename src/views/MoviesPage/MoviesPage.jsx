import { Outlet } from "react-router-dom";
import { MainContainer, Section } from "components/UtilsStyledComponents";
import Footer from "components/Footer";

export default function MoviesPage() {
  return (
    <>
      <Section>
        <MainContainer>
          <main className="mainContent">
            <Outlet />
          </main>
        </MainContainer>
      </Section>
      <Footer />
    </>
  );
}
