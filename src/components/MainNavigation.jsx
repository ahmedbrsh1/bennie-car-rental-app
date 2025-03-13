import { Form, Link, useFetcher, useRouteLoaderData } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function MainNavigation() {
  const { token } = useRouteLoaderData("authLoader");
  const [dropDownOpened, setDropDownOpened] = useState(false);
  const fetcher = useFetcher();
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetcher.load("/rentacar");
  }, []);

  function updateUserSearch(e) {
    setFilteredCars(() => {
      if (e.target.value.trim().length > 2) {
        return fetcher.data.filter(
          (car) =>
            car.manufacturer
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            car.model.toLowerCase().includes(e.target.value.toLowerCase()) ||
            car.year.includes(e.target.value)
        );
      } else {
        return [];
      }
    });
  }

  console.log(filteredCars);

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
            <input
              onChange={updateUserSearch}
              type="text"
              placeholder="Search..."
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            {filteredCars.length > 0 && (
              <ul className={styles.user_drop_down_menu}>
                {filteredCars.map((car) => (
                  <li>
                    <Link to={`/rentacar/${car.car_id}`}>
                      {car.manufacturer} {car.model} {car.year}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
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
