import { redirect, useActionData } from "react-router-dom";
import Register from "../components/Register";
import {
  belowMinLength,
  hasEmptyFields,
  invalidEmail,
  isEmpty,
} from "../util/validation";
import { API_URL } from "../util/api";

export default function RegisterPage() {
  const errorData = useActionData();
  return <Register errorData={errorData} />;
}

export async function action({ request }) {
  const data = await request.formData();
  const user = Object.fromEntries(data.entries());

  const errors = {
    ...invalidEmail(user.email),
    ...belowMinLength("password", "Password", user.password, 8),
    ...hasEmptyFields(user),
  };

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  const response = await fetch(
    `/.netlify/functions/proxy?action=registerUser`,
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    return errorData;
  }

  const resData = await response.json();
  const token = resData.email;

  localStorage.setItem("token", token);
  return redirect("/");
}
