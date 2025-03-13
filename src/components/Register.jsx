import { Form, useSubmit } from "react-router-dom";
import styles from "../components/Search.module.css";
import { Link } from "react-router-dom";

export default function Register({ errorData }) {
  return (
    <>
      <div className="margin-top"></div>
      <Form style={{ maxWidth: "33em" }} method="post" className={styles.form}>
        <h1 className={styles.form_header}>Register</h1>
        {errorData?.error && <p className={styles.error}>{errorData.error}</p>}
        <div className={styles.inputs_wrapper}>
          <div>
            <input
              id="fname"
              name="fname"
              className={`${styles.input} ${
                errorData?.fname && styles.invalid_input
              }`}
              type="text"
              placeholder="First Name"
            />
            {errorData?.fname && (
              <p className={styles.error}>{errorData.fname}</p>
            )}
          </div>

          <div>
            <input
              id="lname"
              name="lname"
              className={`${styles.input} ${
                errorData?.lname && styles.invalid_input
              }`}
              type="text"
              placeholder="Last Name"
            />
            {errorData?.lname && (
              <p className={styles.error}>{errorData.lname}</p>
            )}
          </div>
          <div>
            <input
              id="email"
              name="email"
              className={`${styles.input} ${
                errorData?.email && styles.invalid_input
              }`}
              type="text"
              placeholder="Email"
            />
            {errorData?.email && (
              <p className={styles.error}>{errorData.email}</p>
            )}
          </div>
          <div>
            <input
              id="ssn"
              name="ssn"
              className={styles.input}
              type="text"
              placeholder="Social Security Number"
            />
            {errorData?.ssn && <p className={styles.error}>{errorData.ssn}</p>}
          </div>
          <div>
            <input
              id="lic_num"
              name="lic_num"
              className={styles.input}
              type="text"
              placeholder="License Number"
            />
            {errorData?.lic_num && (
              <p className={styles.error}>{errorData.lic_num}</p>
            )}
          </div>
          <div>
            <input
              id="phone_number"
              name="phone_number"
              className={`${styles.input} ${
                errorData?.phone_number && styles.invalid_input
              }`}
              type="text"
              placeholder="Phone Number"
            />
            {errorData?.phone_number && (
              <p className={styles.error}>{errorData.phone_number}</p>
            )}
          </div>
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
          <div>
            <input
              id="password"
              name="password"
              className={`${styles.input} ${
                errorData?.password && styles.invalid_input
              }`}
              type="password"
              placeholder="Password"
            />
            {errorData?.password && (
              <p className={styles.error}>{errorData.password}</p>
            )}
          </div>
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
