import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import CarDetails from "../components/CarDetails";

export default function CarDetailsPage() {
  const car = useLoaderData();

  return (
    <>
      <Outlet />
      <CarDetails car={car} />
    </>
  );
}

export async function loader({ params }) {
  const response = await fetch(
    `http://localhost:8000/index.php?action=getCarById&id=${params.id}`
  );

  if (!response.ok) {
    throw new Error("Error ! Can't load selected car");
  } else {
    const resData = await response.json();
    return resData;
  }
}
