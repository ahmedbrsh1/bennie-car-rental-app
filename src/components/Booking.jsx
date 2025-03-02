import { Form, Link, useParams } from "react-router-dom";
import Modal from "./Modal";
import classes from "./Search.module.css";
import styles from "./UserCreditCards.module.css";
export default function Booking({
  creditCards,
  car,
  updateDate,
  total_price,
  errorData,
}) {
  const params = useParams();
  return (
    <>
      <Modal>
        <Form method="post" className={classes.form}>
          <div className="container">
            <h1 className={classes.form_header}>
              {car.manufacturer} {car.model} {car.year}
            </h1>
            {errorData && <p className={classes.error}>{errorData.error}</p>}
            <div className={classes.inputs_wrapper}>
              <input
                onChange={(e) => {
                  updateDate("start_date", e.target.value);
                }}
                className={classes.input}
                type="date"
                id="from"
                name="from"
                placeholder="Pickup Date"
                required
              />

              <input
                onChange={(e) => {
                  updateDate("end_date", e.target.value);
                }}
                className={classes.input}
                type="date"
                id="to"
                name="to"
                required
              />

              <input
                className={classes.input}
                type="text"
                id="location"
                name="location"
                placeholder="Pickup Location"
                required
              />
              <input
                className={classes.input}
                type="text"
                id="drop-location"
                name="drop-location"
                placeholder="Drop Location"
                required
              />
            </div>
            {total_price && <h3>Total Price : {total_price}</h3>}

            {(creditCards && !creditCards.length == 0 && (
              <ul className={styles.cards_wrapper}>
                {creditCards.map((creditCard) => (
                  <li key={creditCard.card_id}>
                    <input
                      type="radio"
                      name="card_id"
                      value={creditCard.card_id}
                    />
                    <span>
                      Card ending in{" "}
                      {creditCard.card_number.toString().slice(-4)}
                    </span>
                    <span>{creditCard.cardholder_name}</span>
                    <span>{creditCard.expiration_date}</span>
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
