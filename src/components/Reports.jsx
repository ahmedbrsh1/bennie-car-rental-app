import { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./Booking.module.css";

export default function Reports({ report }) {
  const [reportType, setReportType] = useState("");

  // Define table structures based on reportType
  const tableStructures = {
    reservations_in_period: [
      { key: "model", label: "Car Model" },
      { key: "manufacturer", label: "Car Manufacturer" },
      { key: "fname", label: "Customer First Name" },
      { key: "lname", label: "Customer Last Name" },
      { key: "email", label: "Customer Email" },
      { key: "book_date", label: "Start Date" },
      { key: "return_date", label: "End Date" },
    ],
    car_status_on_day: [
      { key: "car_id", label: "Car ID" },
      { key: "model", label: "Car Model" },
      { key: "manufacturer", label: "Car Manufacturer" },
      { key: "status", label: "Status" },
    ],
    reservations_by_customer: [
      { key: "model", label: "Car Model" },
      { key: "manufacturer", label: "Car Manufacturer" },
      { key: "book_date", label: "Start Date" },
      { key: "return_date", label: "End Date" },
    ],
    daily_payments_in_period: [
      { key: "payment_date", label: "Payment Date" },
      { key: "total_payments", label: "Total Payments" },
    ],
  };

  // Determine the current structure
  const currentStructure = tableStructures[reportType] || [];

  return (
    <>
      <section>
        <Form method="POST">
          <label htmlFor="report_type">Report Type</label>
          <select
            onChange={(e) => {
              setReportType(e.target.value);
            }}
            name="report_type"
            id="report_type"
          >
            <option value="">None</option>
            <option value="reservations_in_period">
              Reservations in period
            </option>
            <option value="car_status_on_day">Car status on day</option>
            <option value="reservations_by_customer">
              Reservations by customer
            </option>
            <option value="daily_payments_in_period">
              Daily payments in period
            </option>
          </select>
          {reportType == "reservations_in_period" ? (
            <>
              <div className={classes.div}>
                <label htmlFor="from">From</label>
                <input
                  className={classes.input}
                  type="date"
                  id="from"
                  name="from"
                />
              </div>

              <div className={classes.div}>
                <label htmlFor="to">To</label>
                <input
                  className={classes.input}
                  type="date"
                  id="to"
                  name="to"
                />
              </div>
            </>
          ) : (
            ""
          )}

          {reportType == "car_status_on_day" ? (
            <>
              <div className={classes.div}>
                <label htmlFor="day">Day</label>
                <input
                  className={classes.input}
                  type="date"
                  id="day"
                  name="day"
                />
              </div>
            </>
          ) : (
            ""
          )}

          {reportType == "reservations_by_customer" ? (
            <>
              <div className={classes.div}>
                <label htmlFor="customer_id">Customer_ID</label>
                <input
                  className={classes.input}
                  type="input"
                  id="customer_id"
                  name="customer_id"
                />
              </div>
            </>
          ) : (
            ""
          )}

          {reportType == "daily_payments_in_period" ? (
            <>
              <div className={classes.div}>
                <label htmlFor="from">From</label>
                <input
                  className={classes.input}
                  type="date"
                  id="from"
                  name="from"
                />
              </div>

              <div className={classes.div}>
                <label htmlFor="to">To</label>
                <input
                  className={classes.input}
                  type="date"
                  id="to"
                  name="to"
                />
              </div>
            </>
          ) : (
            ""
          )}
          <div className="buttoncontainer">
            <button className="button">Get Report</button>
          </div>
        </Form>
      </section>
      <section>
        <table border="1">
          <thead>
            <tr>
              <th>#</th>
              {currentStructure.map((column) => (
                <th key={column.key}>{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {report &&
              report.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {currentStructure.map((column) => (
                    <td key={column.key}>{item[column.key]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
