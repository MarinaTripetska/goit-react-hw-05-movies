import { Outlet } from "react-router-dom";

export default function MoviesPage() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
