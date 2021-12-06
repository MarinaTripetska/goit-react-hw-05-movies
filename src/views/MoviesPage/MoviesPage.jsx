import { Outlet } from "react-router-dom";

export default function MoviesPage() {
  return (
    <main>
      <h1>Movies page</h1>

      <Outlet />
    </main>
  );
}
