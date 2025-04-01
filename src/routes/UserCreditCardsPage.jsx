import { Outlet, redirect } from "react-router-dom";
import UserCreditCards from "../components/UserCreditCards";
import { API_URL } from "../util/api";
export default function UserCreditCardsPage() {
  return (
    <>
      <UserCreditCards />
      <Outlet />
    </>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const card_id = data.get("card_id");

  const response = await fetch(`${API_URL}?action=deleteCard`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ card_id }),
  });

  return redirect("/user/credit_cards");
}
