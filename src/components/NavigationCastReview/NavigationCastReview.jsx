import { useLocation } from "react-router-dom";
import { Nav, List, Link } from "./NavigationCastReview.styled";

export const NavigationCastReview = () => {
  const location = useLocation();
  return (
    <Nav>
      <List>
        <li>
          <Link to={`cast`} state={{ from: location.state?.from }} replace>
            Cast
          </Link>
        </li>

        <li>
          <Link to={`reviews`} state={{ from: location.state?.from }} replace>
            Revives
          </Link>
        </li>
      </List>
    </Nav>
  );
};
