import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <MainNavigation />
        <main style={{ flex: 1 }}>
          {" "}
          {/* This makes content take available space */}
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export async function authLoader() {
  const branch_id = localStorage.getItem("branch_id");
  const token = localStorage.getItem("token");
  return { branch_id, token };
}
