import { NavLink } from "react-router-dom";
import "./NavBar.css";
export default function NavBar() {
  return (
    <header>
      <nav>
        <NavLink className="nav-item" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item" to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
