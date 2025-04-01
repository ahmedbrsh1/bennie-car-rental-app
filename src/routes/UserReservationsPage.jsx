import { Outlet } from "react-router-dom";
import UserReservations from "../components/UserReservations";
import { API_URL } from "../util/api";

export default function UserReservationsPage() {
  return (
    <>
      <Outlet />
      <UserReservations />
    </>
  );
}

export async function action({ request }) {
  const data = await request.formData();
  const book_id = data.get("intent");

  const response = await fetch(
    `/.netlify/functions/proxy?action=cancelReservation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ book_id }),
    }
  );

  const resData = await response.json();
  console.log(resData);
}
