import { Form } from "react-router-dom";
import styles from "./Search.module.css";
export default function Search() {
  return (
    <Form method="post" className={styles.form}>
      <div className={styles.inputs_wrapper}>
        <input
          className={styles.input}
          name="manufacturer"
          id="manufacturer"
          placeholder="Manufacturer"
        />

        <input
          className={styles.input}
          name="model"
          id="model"
          placeholder="Model"
        />

        <input
          className={styles.input}
          name="year"
          id="year"
          placeholder="Year"
        />

        <input
          className={styles.input}
          type="text"
          id="min"
          placeholder="Minimum Price"
        />

        <input
          className={styles.input}
          type="text"
          id="max"
          placeholder="Maximum Price"
        />
      </div>

      <div className="button-container">
        <button className="button primary-button">Search</button>
      </div>
    </Form>
  );
}
