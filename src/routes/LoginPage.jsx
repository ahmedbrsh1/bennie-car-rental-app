import { redirect, useActionData } from "react-router-dom";
import Login from "../components/Login";
import { hasEmptyFields, invalidEmail } from "../util/validation";

export default function LoginPage() {
  const errorData = useActionData();
  return (
    <>
      <Login errorData={errorData} />
    </>
  );
}

export async function action({ request }) {
  const fd = await request.formData();
  const user = Object.fromEntries(fd.entries());

  const errors = {
    ...invalidEmail(user.email),
    ...hasEmptyFields(user),
  };

  if (Object.keys(errors).length > 0) {
    return errors;
  }

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
