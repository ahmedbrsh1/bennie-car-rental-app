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

export async function carDetailsLoader({ params }) {
  const response = await fetch(
    `http://localhost:8000/index.php?action=getCarById&id=${params.id}`
  );

  if (!response.ok) {
    //..
  } else {
    const resData = await response.json();
    return resData;
  }
}
