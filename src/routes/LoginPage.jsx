import { redirect, useActionData } from "react-router-dom";
import Login from "../components/Login";
export default function LoginPage() {
  const errorData = useActionData();
  return (
    <>
      <Login errorData={errorData} />
    </>
  );
}

export async function loginAction({ request }) {
  const data = await request.formData();
  const user = {
    email: data.get("email"),

    password: data.get("password"),
  };

  const response = await fetch(
    "http://localhost:8000/index.php?action=loginUser",
    {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    const errorData = response.json();
    return errorData;
  }

  const resData = await response.json();
  const token = resData.email;

  localStorage.setItem("token", token);
  return redirect("/");
}
