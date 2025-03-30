import { Form } from "react-router-dom";
import Modal from "./Modal";
import styles from "./ReviewCar.module.css";
import styles2 from "./Search.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function rateCar() {
  return (
    <>
      <Modal>
        <Form method="post" className={styles.form}>
          <h2 className="color-nero">Rate your ride with Toyota Yaris</h2>
          <div className={styles.rate_wrapper}>
            <label htmlFor="1">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input type="radio" id="1" name="rate" value="1" />
            <label htmlFor="2">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input type="radio" id="2" name="rate" value="2" />
            <label htmlFor="3">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input type="radio" id="3" name="rate" value="3" />
            <label htmlFor="4">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input type="radio" id="4" name="rate" value="4" />
            <label htmlFor="5">
              <FontAwesomeIcon icon={faStar} />
            </label>
            <input type="radio" id="5" name="rate" value="5" />
          </div>
          <p>Leave a review. (optional)</p>
          <textarea
            className={styles2.input}
            style={{ height: "7em", resize: "none" }}
            name="review"
          />
          <div className="button-container">
            <button className="button primary-button">Submit</button>
          </div>
        </Form>
      </Modal>
    </>
  );
}
