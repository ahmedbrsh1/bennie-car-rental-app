import { useLoaderData } from "react-router-dom";
import Home from "../components/Home";
import { API_URL } from "../util/api";

export default function HomePage() {
  const { cars } = useLoaderData();

  return (
    <>
      <Home cars={cars} />
    </>
  );
}

async function fetchRandomCars() {
  const branch_id = localStorage.getItem("branch_id");
  const value = process.env.REACT_APP_API_URL;
  try {
    const response = await fetch(
      `/.netlify/functions/proxy?action=getRandomCars&branch_id=${branch_id}`
    );

    if (!response.ok) {
      return { isError: true, message: "Could not fetch cars !" };
    } else {
      const resData = await response.json();
      return resData;
    }
  } catch (error) {
    return { isError: true, message: "Network Error, Server might be down !" };
  }
}

export async function randomCarsLoader() {
  return {
    cars: fetchRandomCars(),
  };
}
