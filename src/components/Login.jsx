import { Form, Link } from "react-router-dom";
import styles from "../components/Search.module.css";

export default function Login({ errorData }) {
  return (
    <>
      <div className="margin-top"></div>
      <Form style={{ maxWidth: "35em" }} method="post" className={styles.form}>
        <h1 className={styles.form_header}>Login</h1>
        {errorData && <p>{errorData.error}</p>}
        <div className={styles.inputs_wrapper}>
          <input
            id="email"
            name="email"
            className={styles.input}
            type="email"
            placeholder="Email"
            required
          />

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
          <button className="button primary-button">Login</button>
        </div>
        <Link className="secondary-link" to="/register">
          Dont have an account ? Register
        </Link>
      </Form>
    </>
  );
}
