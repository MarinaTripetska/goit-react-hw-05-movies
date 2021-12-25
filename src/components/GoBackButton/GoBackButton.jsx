import { Link, useLocation } from "react-router-dom";
import s from "./GoBackButtom.module.css";
import { ImArrowLeft2 } from "react-icons/im";

export default function GoBackButton() {
  const location = useLocation();
  const pathname = location.state?.from?.pathname;
  const search = location.state?.from?.search;

  return (
    <Link
      to={pathname ? `${pathname}${search}` : "/"}
      className={s.btn}
      title="Comeback button"
    >
      <ImArrowLeft2 />
    </Link>
  );
}
