import RegisterCar from "../components/RegisterCar";
import { API_URL } from "../util/api";

export default function RegisterCarPage() {
  return <RegisterCar />;
}

export async function action({ request }) {
  const data = await request.formData();
  const car = {
    manufacturer: data.get("manufacturer"),
    model: data.get("model"),
    year: data.get("year"),
    price_per_day: data.get("price"),
    fuel_type: data.get("fuel"),
    capacity: data.get("capacity"),
    branch_id: data.get("branch_id"),
    available: data.get("available") ? "Y" : "F",
  };
  const response = await fetch(`${API_URL}?action=registerCar`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(car),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }

  const resData = await response.json();
  console.log(resData);
}
