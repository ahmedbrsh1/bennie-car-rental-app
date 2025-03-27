import { redirect, useLoaderData } from "react-router-dom";
import User from "../components/User";

export default function UserPage() {
  return (
    <>
      <User />
    </>
  );
}

export async function userDataLoader() {
  const email = localStorage.getItem("token");
  const response = await fetch(
    `http://localhost:8000/index.php?action=getUserData`,
    {
      headers: {
        "Content-type": "Application/json",
        Authorization: `Bearer ${email}`,
      },
    }
  );

  const resData = await response.json();

  return resData;
}

export async function userUpdateAndDeleteAction({ request }) {
  const token = localStorage.getItem("token");

  if (request.method === "PATCH") {
    const formData = await request.formData();
    const newData = {
      email: formData.get("email"),
      phone_number: formData.get("phone_number"),
      lic_num: formData.get("license_number"),
    };

    const response = await fetch(
      "http://localhost:8000/index.php?action=updateUserInfo",
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
      "http://localhost:8000/index.php?action=deleteUser",
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
