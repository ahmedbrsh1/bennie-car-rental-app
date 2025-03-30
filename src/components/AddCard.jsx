import { Form } from "react-router-dom";
import classes from "./Search.module.css";
import Modal from "./Modal";

export default function AddCard({ errorData }) {
  return (
    <Modal>
      <Form
        style={{ minWidth: "24em", maxWidth: "30em" }}
        method="post"
        className={classes.form}
      >
        {errorData?.error && <p className={classes.error}>{errorData.error}</p>}
        <div className={classes.inputs_wrapper}>
          <div>
            <input
              className={`${classes.input} ${
                errorData?.card_number && classes.invalid_input
              }`}
              type="number"
              id="card_number"
              name="card_number"
              placeholder="Card Number"
            />
            {errorData?.card_number && (
              <p className={classes.error}>{errorData.card_number}</p>
            )}
          </div>
          <div>
            <input
              className={`${classes.input} ${
                errorData?.cardholder_name && classes.invalid_input
              }`}
              type="text"
              id="cardholder_name"
              name="cardholder_name"
              placeholder="Name On Card"
            />
            {errorData?.cardholder_name && (
              <p className={classes.error}>{errorData.cardholder_name}</p>
            )}
          </div>
          <div>
            <input
              className={`${classes.input} ${
                errorData?.expiration_date && classes.invalid_input
              }`}
              type="date"
              id="expiration_date"
              name="expiration_date"
              placeholder="Expiration Date"
            />
            {errorData?.expiration_date && (
              <p className={classes.error}>{errorData.expiration_date}</p>
            )}
          </div>
          <div>
            <input
              className={`${classes.input} ${
                errorData?.cvv && classes.invalid_input
              }`}
              type="number"
              id="cvv"
              name="cvv"
              placeholder="CVV"
            />
            {errorData?.cvv && <p className={classes.error}>{errorData.cvv}</p>}
          </div>
        </div>

        <div className="button-container">
          <button className="button primary-button">Add Card</button>
        </div>
      </Form>
    </Modal>
  );
}
