import { useActionData } from "react-router-dom";
import Reports from "../components/Reports";

export default function ReportsPage() {
  const report = useActionData();

  return <Reports report={report} />;
}

export async function action({ request }) {
  const data = await request.formData();
  const report_type = data.get("report_type");
  let report_details = {
    report_type: report_type,
  };
  if (
    report_type == "reservations_in_period" ||
    report_type == "daily_payments_in_period"
  ) {
    report_details = {
      ...report_details,
      start_date: data.get("from"),
      end_date: data.get("to"),
    };
  } else if (report_type == "car_status_on_day") {
    report_details = {
      ...report_details,
      specific_date: data.get("day"),
    };
  } else if (report_type == "reservations_by_customer") {
    report_details = {
      ...report_details,
      customer_id: data.get("customer_id"),
    };
  }

  const response = await fetch(
    `http://localhost:8000/index.php?action=getReport`,
    {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(report_details),
    }
  );

  if (!response.ok) {
    //,,
  }

  const resData = await response.json();
  return resData;
}
