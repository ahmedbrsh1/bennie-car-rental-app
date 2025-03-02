import { Link, Outlet } from "react-router-dom";
import styles from "./User.module.css";

export default function User() {
  return (
    <>
      <div className="container">
        <div className={styles.user_wrapper}>
          <nav>
            <ul>
              <li>
                <Link to={"/user/account"}>Account</Link>
              </li>
              <li>
                <Link to={"/user/reservations"}>Reservations</Link>
              </li>
              <li>
                <Link to={"/user/credit_cards"}>Credit Cards</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.content_wrapper}>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </>
  );
}
