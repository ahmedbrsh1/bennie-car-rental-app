import { redirect, useLoaderData } from "react-router-dom";
import User from "../components/User";
import { API_URL } from "../util/api";

export default function UserPage() {
  return (
    <>
      <User />
    </>
  );
}

export async function loader() {
  const email = localStorage.getItem("token");
  if (!email) {
    return redirect("/login");
  }
  const response = await fetch(`/.netlify/functions/proxy?action=getUserData`, {
    headers: {
      "Content-type": "Application/json",
      Authorization: `Bearer ${email}`,
    },
  });

  const resData = await response.json();

  return resData;
}

export async function action({ request }) {
  const token = localStorage.getItem("token");

  if (request.method === "PATCH") {
    const formData = await request.formData();
    const newData = {
      email: formData.get("email"),
      phone_number: formData.get("phone_number"),
      lic_num: formData.get("license_number"),
    };

    const response = await fetch(
      `/.netlify/functions/proxy?action=updateUserInfo`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newData),
        method: "PATCH",
      }
    );

    if (!response.ok) {
      const errorData = response.json();
      return errorData;
    }
  } else if (request.method === "DELETE") {
    const response = await fetch(
      `/.netlify/functions/proxy?action=deleteUser`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },

        method: "DELETE",
      }
    );

    if (!response.ok) {
      const errorData = response.json();
      return errorData;
    }

    // localStorage.removeItem("token");
    return redirect("/about");
  }
}
