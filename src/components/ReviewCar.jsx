import { Form } from "react-router-dom";
import Modal from "./Modal";
import styles from "./Search.module.css";
export default function ReviewCar() {
  return (
    <>
      <Modal>
        <Form className={styles.form}>
          <h2 className="color-nero">Rate your ride with Toyota Yaris</h2>
          <p>Leave a review. (optional)</p>
          <input type="text" className={styles.input} />
          <div className="button-container">
            <button className="button primary-button">Submit</button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
