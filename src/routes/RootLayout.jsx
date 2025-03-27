import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />

      <Outlet />

      <Footer />
    </>
  );
}

export async function authLoader() {
  const branch_id = localStorage.getItem("branch_id");
  const token = localStorage.getItem("token");
  return { branch_id, token };
}
