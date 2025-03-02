import { redirect } from "react-router-dom";

export default function Logout() {}

export function logoutAction() {
  localStorage.removeItem("token");
  return redirect("/");
}
