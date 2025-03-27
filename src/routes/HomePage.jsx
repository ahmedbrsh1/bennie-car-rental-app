import { useLoaderData, useNavigate } from "react-router-dom";
import CarPreview from "../components/CarPreview";
import { useEffect } from "react";
import Home from "../components/Home";

export default function HomePage() {
  const cars = useLoaderData();

  const navigate = useNavigate();

  useEffect(() => {
    const branchId = localStorage.getItem("branch_id");

    if (!branchId) {
      navigate("/branch");
    }
  }, [navigate]);

  return (
    <>
      <Home cars={cars} />
    </>
  );
}

export async function randomCarsLoader() {
  const branch_id = localStorage.getItem("branch_id");
  const response = await fetch(
    `http://localhost:8000/index.php?action=getRandomCars&branch_id=${branch_id}`
  );

  if (!response.ok) {
    //..
  } else {
    const resData = await response.json();

    return resData;
  }
}
