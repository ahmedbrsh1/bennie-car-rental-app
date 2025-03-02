import { Form } from "react-router-dom";
import styles from "../components/Search.module.css";
import { Link } from "react-router-dom";
export default function Register({ errorData }) {
  return (
    <>
      <div className="margin-top"></div>
      <Form style={{ maxWidth: "35em" }} method="post" className={styles.form}>
        <h1 className={styles.form_header}>Register</h1>
        {errorData && <p>{errorData.error}</p>}
        <div className={styles.inputs_wrapper}>
          <input
            id="fname"
            name="fname"
            className={styles.input}
            type="text"
            placeholder="First Name"
            required
          />

          <input
            id="lname"
            name="lname"
            className={styles.input}
            type="text"
            placeholder="Last Name"
            required
          />

          <input
            id="email"
            name="email"
            className={styles.input}
            type="email"
            placeholder="Email"
            required
          />

          <input
            id="ssn"
            name="ssn"
            className={styles.input}
            type="text"
            placeholder="Social Security Number"
            required
          />

          <input
            id="license_number"
            name="license_number"
            className={styles.input}
            type="text"
            placeholder="License Number"
            required
          />

          <input
            id="phone_number"
            name="phone_number"
            className={styles.input}
            type="text"
            placeholder="Phone Number"
            required
          />

          <div className={styles.flex_wrapper}>
            <label htmlFor="male">Male</label>
            <input id="male" type="radio" name="gender" value="male" required />
            <label htmlFor="female">Female</label>
            <input
              id="female"
              type="radio"
              name="gender"
              value="female"
              required
            />
          </div>

          <input
            id="password"
            name="password"
            className={styles.input}
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="button-container">
          <button className="button primary-button">Register</button>
        </div>
        <Link className="secondary-link" to="/login">
          Already have an account ? Login
        </Link>
      </Form>
    </>
  );
}
