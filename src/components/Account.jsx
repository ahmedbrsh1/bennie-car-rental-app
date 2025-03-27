import { Form, useRouteLoaderData, useSubmit } from "react-router-dom";
import styles from "./Search.module.css";

export default function Account() {
  const userData = useRouteLoaderData("userDataLoader");
  const userInfo = userData.user;
  const submit = useSubmit();
  function startDelete() {
    if (
      confirm(
        "Are you sure you want to delete your account ? This cannot be undone."
      )
    ) {
      submit(null, { method: "DELETE" });
    }
  }

  return (
    <Form method="patch">
      <div className={styles.inputs_wrapper}>
        <div>
          <label htmlFor="fname">First Name</label>
          <input
            id="fname"
            name="fname"
            className={styles.input}
            type="text"
            value={userInfo.fname}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="lname">Last Name</label>
          <input
            id="lname"
            name="lname"
            className={styles.input}
            type="text"
            value={userInfo.lname}
            readOnly
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            className={styles.input}
            type="email"
            defaultValue={userInfo.email}
          />
        </div>

        <div>
          <label htmlFor="license_number">License Number</label>
          <input
            id="license_number"
            name="license_number"
            className={styles.input}
            type="text"
            defaultValue={userInfo.lic_num}
          />
        </div>

        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <input
            id="phone_number"
            name="phone_number"
            className={styles.input}
            type="text"
            defaultValue={userInfo.phone_number}
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={startDelete} className="danger-button">
          Delete Account
        </button>
        <button className="button primary-button">Update</button>
      </div>
    </Form>
  );
}
