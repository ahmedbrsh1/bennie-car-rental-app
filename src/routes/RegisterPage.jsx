import { redirect, useActionData } from "react-router-dom";
import Register from "../components/Register";

export default function RegisterPage() {
  const errorData = useActionData();
  return <Register errorData={errorData} />;
}

export async function registerAction({ request }) {
  const data = await request.formData();
  const user = {
    fname: data.get("fname"),
    lname: data.get("lname"),
    email: data.get("email"),
    ssn: data.get("ssn"),
    lic_num: data.get("license_number"),
    phone_number: data.get("phone_number"),
    gender: data.get("gender"),
    password: data.get("password"),
  };

  const response = await fetch(
    "http://localhost:8000/index.php?action=registerUser",
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
