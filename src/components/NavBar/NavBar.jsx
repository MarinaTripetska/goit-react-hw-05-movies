import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/invoices">Invoices</Link> |{" "}
      <Link to="/expenses">Expenses</Link>
    </nav>
  );
}
