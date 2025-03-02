import { Outlet, useActionData, useLoaderData } from "react-router-dom";
import CarPreview from "../components/CarPreview";
import Search from "../components/Search";
import Listings from "../components/Listings";

export default function RentACar() {
  const cars = useLoaderData();
  const searchedCars = useActionData();

  return (
    <>
      <Listings cars={cars} searchedCars={searchedCars} />

      <Outlet />
    </>
  );
}

export async function carsLoader() {
  const branch_id = localStorage.getItem("branch_id");
  const response = await fetch(
    `http://localhost:8000/index.php?action=getAllCars&branch_id=${branch_id}`
  );

  if (!response.ok) {
    //..
  } else {
    const resData = await response.json();

    return resData;
  }
}

export async function searchAction({ request }) {
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
