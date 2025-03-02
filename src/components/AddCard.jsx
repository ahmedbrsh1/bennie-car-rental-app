import { Form } from "react-router-dom";
import classes from "./Search.module.css";
import Modal from "./Modal";

export default function AddCard() {
  return (
    <Modal>
      <Form style={{ maxWidth: "30em" }} method="post" className={classes.form}>
        <div className={classes.inputs_wrapper}>
          <input
            className={classes.input}
            type="number"
            id="number"
            name="number"
            placeholder="Card Number"
          />

          <input
            className={classes.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name On Card"
          />

          <input
            className={classes.input}
            type="date"
            id="exdate"
            name="exdate"
            placeholder="Expiration Date"
          />

          <input
            className={classes.input}
            type="number"
            id="cvv"
            name="cvv"
            placeholder="CVV"
          />
        </div>

        <div className="button-container">
          <button className="button primary-button">Add Card</button>
        </div>
      </Form>
    </Modal>
  );
}
