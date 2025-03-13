import { Form, Link, useSubmit } from "react-router-dom";
import styles from "../components/Search.module.css";

export default function Login({ errorData }) {
  return (
    <>
      <div className="margin-top"></div>
      <Form style={{ maxWidth: "30em" }} method="post" className={styles.form}>
        <h1 className={styles.form_header}>Login</h1>
        {errorData?.error && <p className={styles.error}>{errorData.error}</p>}
        <div className={styles.inputs_wrapper}>
          <p>
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
          </p>

          <p>
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
          </p>
        </div>

        <div className="button-container">
          <button className="button primary-button">Login</button>
        </div>
        <Link className="secondary-link" to="/register">
          Dont have an account ? Register
        </Link>
      </Form>
    </>
  );
}
