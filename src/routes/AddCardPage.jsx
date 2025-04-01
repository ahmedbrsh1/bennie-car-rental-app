import { redirect, useActionData } from "react-router-dom";
import AddCard from "../components/AddCard";
import {
  belowMinLength,
  hasEmptyFields,
  invalidCardNumber,
} from "../util/validation";
import { API_URL } from "../util/api";

export default function AddCardPage() {
  const errorData = useActionData();
  return (
    <>
      <AddCard errorData={errorData} />
    </>
  );
}

export async function action({ request, params }) {
  const token = localStorage.getItem("token");
  const form = await request.formData();
  const card = Object.fromEntries(form.entries());

  const errors = {
    ...invalidCardNumber(card.card_number),
    ...belowMinLength("cvv", "CVV", card.cvv, 3),
    ...hasEmptyFields(card),
  };

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const response = await fetch(`${API_URL}?action=addCreditCard`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(card),
  });

  if (!response.ok) {
    const resError = await response.json();
    return resError;
  }

  if (params.id) {
    return redirect(`/rentacar/${params.id}/booking`);
  }
  return redirect("..");
}
