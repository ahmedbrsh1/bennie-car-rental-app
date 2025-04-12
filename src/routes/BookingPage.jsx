import { redirect, useActionData, useLoaderData } from "react-router-dom";
import Booking from "../components/Booking";

import { hasEmptyFields, isEmpty } from "../util/validation";
import { API_URL } from "../util/api";

export default function BookingPage() {
  const errorData = useActionData();
  const creditCards = useLoaderData();

  return (
    <>
      <Booking creditCards={creditCards} errorData={errorData} />
    </>
  );
}

export async function loader() {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }

  const response = await fetch(
    `/.netlify/functions/proxy?action=getAllCreditCards`,
    {
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const resData = await response.json();

  return resData;
}

export async function action({ request, params }) {
  const form = await request.formData();
  const book = Object.fromEntries(form.entries());

  const card_id = form.get("card_id") || "";

  const errors = {
    ...hasEmptyFields({ ...book, card_id }),
  };

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const today = new Date();
  const startDate = new Date(book.from);
  const endDate = new Date(book.to);
  if (startDate.getTime() <= today.getTime()) {
    return { error: "Invalid date ! Reservations must start after today." };
  } else if (startDate.getTime() > endDate.getTime()) {
    return {
      error: "Invalid date ! Pickup date cannot be after the return date.",
    };
  }

  const token = localStorage.getItem("token");

  const response = await fetch(
    "/.netlify/functions/proxy?action=createBooking",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        car_id: params.id,
        ...book,
        card_id: form.get("card_id"),
      }),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    return errorData;
  }

  alert("Booking created successfully.");

  return redirect(`/`);
}
