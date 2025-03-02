import {
  Outlet,
  redirect,
  useActionData,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import Booking from "../components/Booking";
import { useState } from "react";

export default function BookingPage() {
  const errorData = useActionData();
  const [date, setDate] = useState({
    start_date: "",
    end_date: "",
  });
  function updateDate(attribute, newDate) {
    setDate((date) => {
      return {
        ...date,
        [attribute]: newDate,
      };
    });
  }
  const creditCards = useLoaderData();
  const car = useRouteLoaderData("car");
  let total_price;
  if (date.start_date != "" && date.end_date != "") {
    total_price = calculateTotalPrice(
      date.start_date,
      date.end_date,
      car.price_per_day
    );
    console.log(total_price);
  }

  return (
    <>
      <Outlet />
      <Booking
        total_price={total_price}
        updateDate={updateDate}
        car={car}
        creditCards={creditCards}
        errorData={errorData}
      />
    </>
  );
}

export async function creditCardsLoader() {
  const token = localStorage.getItem("token");

  const response = await fetch(
    "http://localhost:8000/index.php?action=getAllCreditCards",
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

function calculateTotalPrice(startDate, endDate, pricePerDay) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

  if (days > 0) {
    return days * pricePerDay;
  }
}

export async function bookCar({ request, params }) {
  const form = await request.formData();
  const start_date = form.get("from");
  const end_date = form.get("to");
  const today = new Date();
  const startDate = new Date(start_date);
  const endDate = new Date(end_date);
  if (startDate.getTime() <= today.getTime()) {
    return { error: "Invalid date ! Reservations must start after today." };
  } else if (startDate.getTime() > endDate.getTime()) {
    return {
      error: "Invalid date ! Pickup date cannot be after the return date.",
    };
  }

  const { price_per_day } = await (
    await fetch(
      `http://localhost:8000/index.php?action=getCarById&id=${params.id}`
    )
  ).json();

  const token = localStorage.getItem("token");

  const book = {
    car_id: params.id,
    card_id: form.get("card_id"),
    start_date: start_date,
    end_date: end_date,
    book_place: form.get("location"),
    price_paid: calculateTotalPrice(start_date, end_date, price_per_day),
  };

  const response = await fetch(
    "http://localhost:8000/index.php?action=createBooking",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(book),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    return errorData;
  }

  const resData = await response.json();
  alert("Booking created successfully.");

  return redirect(`/`);
}
