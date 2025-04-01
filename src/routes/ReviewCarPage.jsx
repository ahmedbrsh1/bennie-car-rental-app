import { redirect, useNavigate } from "react-router-dom";
import ReviewCar from "../components/ReviewCar";
import { API_URL } from "../util/api";

export default function ReviewCarPage() {
  return <ReviewCar />;
}

export async function action({ params, request }) {
  const fd = await request.formData();
  const token = localStorage.getItem("token");
  const review = {
    car_id: params.car_id,
    rate: fd.get("rate"),
    review: fd.get("review"),
  };

  console.log(review);

  if (!review.rate) {
    return { error: "Please select a rate." };
  }

  const response = await fetch(`/.netlify/functions/proxy?action=addReview`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(review),
  });

  if (!response.ok) {
    const errorData = await response.json();
    return errorData;
  }

  return redirect("..");
}
