import { NavLink } from "react-router-dom";
import s from "./NavBar.module.css";
import MainContainer from "../StyledComponents/MainContainer";

export default function NavBar() {
  const applyClassName = ({ isActive }) => (isActive ? s.activeLink : s.link);

  return (
    <header>
      <MainContainer>
        <nav className={s.nav}>
          <NavLink className={applyClassName} to="/">
            Home
          </NavLink>
          <NavLink className={applyClassName} to="/movies">
            Movies
          </NavLink>
        </nav>
      </MainContainer>
    </header>
  );
}
