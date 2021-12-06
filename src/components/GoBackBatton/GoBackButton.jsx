import { Link, useLocation } from "react-router-dom";

function GoBackButton() {
  const location = useLocation();
  // console.log(location);
  const pathname = location.state?.from?.pathname;
  // console.log(pathname);
  const search = location.state?.from?.search;
  // console.log(search);
  return <Link to={pathname ? `${pathname}${search}` : "/"}>Go back</Link>;
}

export default GoBackButton;
