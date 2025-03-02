import { redirect, useLoaderData } from "react-router-dom";
import Branch from "../components/Branch";

export default function BranchPage() {
  const branches = useLoaderData();

  return <Branch branches={branches} />;
}

export async function branchLoader() {
  const response = await fetch(
    "http://localhost:8000/index.php?action=getAllBranches"
  );

  if (!response.ok) {
    //..
  } else {
    const resData = await response.json();
    return resData;
  }
}

export async function branchAction({ request }) {
  const data = await request.formData();
  const location = data.get("location");
  localStorage.setItem("branch_id", location);
  return redirect("/");
}
