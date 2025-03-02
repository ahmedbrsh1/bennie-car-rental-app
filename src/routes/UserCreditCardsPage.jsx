import { Outlet, redirect } from "react-router-dom";
import UserCreditCards from "../components/UserCreditCards";
export default function UserCreditCardsPage() {
  return (
    <>
      <UserCreditCards />
      <Outlet />
    </>
  );
}

export async function deleteCardAction({ request }) {
  const data = await request.formData();
  const card_id = data.get("card_id");

  const response = await fetch(
    "http://localhost:8000/index.php?action=deleteCard",
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ card_id }),
    }
  );

  return redirect("/user/credit_cards");
}
