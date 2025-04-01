import { Outlet, useRouteError } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <h2 style={{ marginTop: "1em", minHeight: "10em" }} className="danger">
        {error.message || "You've encoutered an error ! Where to go now ?"}
      </h2>
    </>
  );
}
