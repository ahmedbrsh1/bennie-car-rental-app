import { Form } from "react-router-dom";
import styles from "../components/Search.module.css";
export default function RegisterCar() {
  return (
    <>
      <Form method="post" className={styles.form}>
        <p className={styles.p}>
          <label htmlFor="manufacturer">Manufacturer</label>
          <input
            className={styles.input}
            name="manufacturer"
            id="manufacturer"
          ></input>
        </p>
        <p className={styles.p}>
          <label htmlFor="model">Model</label>
          <input className={styles.input} name="model" id="model"></input>
        </p>
        <p className={styles.p}>
          <label htmlFor="year">Year</label>
          <input className={styles.input} name="year" id="year"></input>
        </p>
        <p className={styles.p}>
          <label htmlFor="price">Price per Day</label>
          <input className={styles.input} name="price" id="price"></input>
        </p>
        <p className={styles.p}>
          <label htmlFor="fuel">Fuel Type</label>
          <input className={styles.input} name="fuel" id="fuel"></input>
        </p>
        <p className={styles.p}>
          <label htmlFor="capacity">Capacity</label>
          <input className={styles.input} name="capacity" id="capacity"></input>
        </p>
        <p className={styles.p}>
          <label htmlFor="branch_id">branch_id</label>
          <input
            className={styles.input}
            name="branch_id"
            id="branch_id"
          ></input>
        </p>
        <p className={styles.p}>
          <label htmlFor="available">Available</label>
          <input type="checkbox" name="available" id="available"></input>
        </p>
        <div className="buttoncontainer">
          <button className="button">Register</button>
        </div>
      </Form>
    </>
  );
}
