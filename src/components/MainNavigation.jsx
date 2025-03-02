import { Form, Link, useRouteLoaderData } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MainNavigation() {
  const { token } = useRouteLoaderData("authLoader");
  const [dropDownOpened, setDropDownOpened] = useState(false);

  function toggleDropDown() {
    setDropDownOpened(() => !dropDownOpened);
  }

  return (
    <nav className={styles.nav_container}>
      <div className="container">
        <div className={styles.nav}>
          <FontAwesomeIcon className={styles.hover_icon} icon={faBars} />
          <ul className={styles.ul}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/rentacar"}>Listings</Link>
            </li>
            <li>
              <Link to={"/about"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>

          <Form className={styles.search}>
            <input type="text" placeholder="Search..." />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Form>

          {!token && (
            <Link to={"/login"} className={styles.auth}>
              <div className={styles.iconbackground}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <span>Log In</span>
            </Link>
          )}

          {token && (
            <>
              <button onClick={toggleDropDown} className={styles.button}>
                <div className={styles.iconbackground}>
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </button>
              {dropDownOpened && (
                <ul className={styles.user_drop_down_menu}>
                  <li>
                    <Link to={"/user/account"}>Account</Link>
                  </li>
                  <li>
                    <Link to={"/user/reservations"}>Reservations</Link>
                  </li>
                  <li>
                    <Link to={"/user/credit_cards"}>Credit Cards</Link>
                  </li>
                  <li>
                    <Form action="/logout" method="post">
                      <button className={`${styles.button}`}>Logout</button>
                    </Form>
                  </li>
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
