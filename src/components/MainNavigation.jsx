import { Form, Link, useFetcher, useRouteLoaderData } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function MainNavigation() {
  const { token } = useRouteLoaderData("authLoader");
  const fetcher = useFetcher();
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetcher.load("/rentacar");
  }, []);

  function updateUserSearch(e) {
    setFilteredCars(() => {
      if (e.target.value.trim().length > 0) {
        return fetcher.data.filter(
          (car) =>
            car.manufacturer
              .toLowerCase()
              .startsWith(e.target.value.toLowerCase()) ||
            car.model.toLowerCase().startsWith(e.target.value.toLowerCase()) ||
            car.year.startsWith(e.target.value)
        );
      } else {
        return [];
      }
    });
  }

  return (
    <nav className={styles.nav_container}>
      <div className="container">
        <div className={styles.nav}>
          <div className={styles.links_wrapper}>
            <div className={styles.hover_icon}>
              <FontAwesomeIcon icon={faBars} />
            </div>
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
          </div>

          <div className={styles.search}>
            <input
              onChange={updateUserSearch}
              type="text"
              placeholder="Search..."
            />

            <FontAwesomeIcon icon={faMagnifyingGlass} />

            <AnimatePresence mode="wait">
              {filteredCars.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  layout
                  className={styles.search_result}
                >
                  {filteredCars.slice(0, 4).map((car) => (
                    <li key={car.car_id}>
                      <Link to={`/rentacar/${car.car_id}`}>
                        {car.manufacturer} {car.model} {car.year}
                      </Link>
                    </li>
                  ))}
                  {filteredCars.length > 4 && (
                    <li>
                      <Link to={`/rentacar`}>View More...</Link>
                    </li>
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

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
              <div className={styles.user_drop_down_wrapper}>
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>

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
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
