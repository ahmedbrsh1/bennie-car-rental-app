import { Outlet, useRouteError } from "react-router-dom";
import Error from "../components/Error";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error.message);

  return (
    <>
      <Error error={error.message} />
      <Outlet />
    </>
  );
}
