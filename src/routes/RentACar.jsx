import { Outlet, useActionData, useRouteLoaderData } from "react-router-dom";

import Listings from "../components/Listings";

export default function RentACar() {
  const { cars } = useRouteLoaderData("authLoader");

  const searchedCars = useActionData();

  return (
    <>
      <Listings searchedCars={searchedCars} cars={cars} />
      <Outlet />
    </>
  );
}

export async function action({ request }) {
  const data = await request.formData();

  const car = {
    min_price: data.get("min"),
    max_price: data.get("max"),
    manufacturer: data.get("manufacturer"),
    model: data.get("model"),
    year: data.get("year"),
  };
  const response = await fetch(
    `http://localhost:8000/index.php?action=searchCars`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }

  const resData = await response.json();
  return resData;
}
