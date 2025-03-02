import { redirect } from "react-router-dom";
import AddCard from "../components/AddCard";

export default function AddCardPage() {
  return (
    <>
      <AddCard />
    </>
  );
}

export async function addCreditCard({ request, params }) {
  const token = localStorage.getItem("token");
  const form = await request.formData();
  const card = {
    card_number: form.get("number"),
    cardholder_name: form.get("name"),
    expiration_date: form.get("exdate"),
    cvv: form.get("cvv"),
  };
  console.log(card);

  const response = await fetch(
    "http://localhost:8000/index.php?action=addCreditCard",
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(card),
    }
  );

  if (!response.ok) {
    console.log(123);
  }

  if (params.id) {
    return redirect(`/rentacar/${params.id}/booking`);
  }
  return redirect("..");
}
