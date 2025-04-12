import { Outlet, useLocation, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <div>
        <MainNavigation />

        {navigation.state !== "loading" && (
          <main style={{ minHeight: "80vh" }}>
            {navigation.state === "loading" && (
              <h1 className="loading">Loading...</h1>
            )}
            {navigation.state !== "loading" && <Outlet />}
          </main>
        )}

        <Footer />
      </div>
    </>
  );
}

export async function authLoader() {
  const branch_id = localStorage.getItem("branch_id");
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`/.netlify/functions/proxy?action=getAllCars`);

    if (!response.ok) {
      return { isError: true, message: "Could not fetch cars!" };
    }
    const cars = await response.json();
    return { branch_id, token, cars };
  } catch (error) {
    return { isError: true, message: "Network error. Server may be down." };
  }
}
