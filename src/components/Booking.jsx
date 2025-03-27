import { Form, Link, useParams, useRouteLoaderData } from "react-router-dom";
import Modal from "./Modal";
import classes from "./Search.module.css";
import styles from "./UserCreditCards.module.css";
import { useState } from "react";

export default function Booking({ creditCards, errorData }) {
  function calculateTotalPrice(startDate, endDate, pricePerDay) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    if (days > 0) {
      return days * pricePerDay;
    }
  }

  const params = useParams();
  const [date, setDate] = useState({
    start_date: "",
    end_date: "",
  });
  function updateDate(attribute, newDate) {
    setDate((date) => {
      return {
        ...date,
        [attribute]: newDate,
      };
    });
  }
  const car = useRouteLoaderData("car");
  let total_price;
  if (date.start_date != "" && date.end_date != "") {
    total_price = calculateTotalPrice(
      date.start_date,
      date.end_date,
      car.price_per_day
    );
  }

  return (
    <>
      <Modal>
        <Form method="post" className={classes.form}>
          <div className="container">
            <h1 className={classes.form_header}>
              {car.manufacturer} {car.model} {car.year}
            </h1>
            {errorData?.error && (
              <p className={classes.error}>{errorData.error}</p>
            )}
            <div className={classes.inputs_wrapper}>
              <div>
                <input
                  onChange={(e) => {
                    updateDate("start_date", e.target.value);
                  }}
                  className={`${classes.input} ${
                    errorData?.from && classes.invalid_input
                  }`}
                  type="date"
                  id="from"
                  name="from"
                  value={date.start_date}
                  placeholder="Pickup Date"
                />
                {errorData?.from && (
                  <p className={classes.error}>{errorData.from}</p>
                )}
              </div>
              <div>
                <input
                  onChange={(e) => {
                    updateDate("end_date", e.target.value);
                  }}
                  className={`${classes.input} ${
                    errorData?.to && classes.invalid_input
                  }`}
                  type="date"
                  id="to"
                  value={date.end_date}
                  name="to"
                />
                {errorData?.to && (
                  <p className={classes.error}>{errorData.to}</p>
                )}
              </div>
              <div>
                <input
                  className={`${classes.input} ${
                    errorData?.["pick-location"] && classes.invalid_input
                  }`}
                  type="text"
                  id="pick-location"
                  name="pick-location"
                  placeholder="Pickup Location"
                />
                {errorData?.["pick-location"] && (
                  <p className={classes.error}>{errorData["pick-location"]}</p>
                )}
              </div>
              <div>
                <input
                  className={`${classes.input} ${
                    errorData?.["drop-location"] && classes.invalid_input
                  }`}
                  type="text"
                  id="drop-location"
                  name="drop-location"
                  placeholder="Drop Location"
                />
                {errorData?.["drop-location"] && (
                  <p className={classes.error}>{errorData["drop-location"]}</p>
                )}
              </div>
            </div>
            {total_price && <h3>Total Price : {total_price}</h3>}

            {errorData?.card_id && (
              <p className={classes.error}>Please select a payment method.</p>
            )}

            {(creditCards && !creditCards.length == 0 && (
              <ul className={`${styles.cards_wrapper} ${styles.half_space}`}>
                {creditCards.map((creditCard) => (
                  <li key={creditCard.card_id}>
                    <label htmlFor={creditCard.card_id}>
                      <input
                        id={creditCard.card_id}
                        type="radio"
                        name="card_id"
                        value={creditCard.card_id}
                      />
                      <span className={styles.card_info_wrapper}>
                        <span>
                          Card ending in{" "}
                          {creditCard.card_number.toString().slice(-4)}
                        </span>
                        <span>{creditCard.cardholder_name}</span>
                        <span>{creditCard.expiration_date}</span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            )) || <p>You don't have any credit cards.</p>}

            <div className="button-container">
              <button className="button primary-button">
                Confirm Reservation
              </button>
            </div>
            <div className="button-container">
              <Link
                className="secondary-link"
                to={`/rentacar/${params.id}/addcreditcard`}
              >
                Add a new Credit Card
              </Link>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
}
