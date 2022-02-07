import { useLocation } from "react-router-dom";
import { MainContainer } from "../UtilsStyledComponents";
import GoBackButton from "components/GoBackButton";
import { Header, Nav, StyledLink } from "./NavBar.styled";

export default function NavBar() {
  const location = useLocation();
  const pathname = location.pathname;
  const pathnameFrom = location.state?.from?.pathname;
  const searchFrom = location.search;

  return (
    <Header>
      <MainContainer>
        <Nav>
          {(pathnameFrom && pathname !== "/") || searchFrom ? (
            <GoBackButton />
          ) : null}

          <StyledLink
            to="/"
            state={{
              from: location,
            }}
          >
            Home
          </StyledLink>

          <StyledLink
            to="/movies"
            state={{
              from: location,
            }}
          >
            Movies
          </StyledLink>
        </Nav>
      </MainContainer>
    </Header>
  );
}
