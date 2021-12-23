import { Link, useLocation } from "react-router-dom";

function GoBackButton() {
  const location = useLocation();
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;

  return <Link to={pathname ? `${pathname}${search}` : "/"}>Go back</Link>;
}

export default GoBackButton;
