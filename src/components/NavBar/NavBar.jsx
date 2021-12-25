import { NavLink, useLocation } from "react-router-dom";
import s from "./NavBar.module.css";
import { MainContainer } from "../UtilsStyledComponents";
import GoBackButton from "components/GoBackButton";

export default function NavBar() {
  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  const location = useLocation();
  const pathname = location.pathname;
  const pathnameFrom = location.state?.from?.pathname;
  const searchFrom = location.search;

  return (
    <header className={s.header}>
      <MainContainer>
        <nav className={s.nav}>
          {(pathnameFrom && pathname !== "/") || searchFrom ? (
            <GoBackButton />
          ) : (
            <></>
          )}
          <NavLink
            className={applyClassName}
            to="/"
            state={{
              from: location,
            }}
          >
            Home
          </NavLink>
          <NavLink
            className={applyClassName}
            to="/movies"
            state={{
              from: location,
            }}
          >
            Movies
          </NavLink>
        </nav>
      </MainContainer>
    </header>
  );
}
