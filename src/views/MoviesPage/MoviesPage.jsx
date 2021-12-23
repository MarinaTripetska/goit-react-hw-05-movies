import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
export default function MoviesPage() {
  return (
    <>
      <main className="mainContent">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
