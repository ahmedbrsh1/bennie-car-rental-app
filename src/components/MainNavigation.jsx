import { Form, Link, useRouteLoaderData } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function MainNavigation() {
  const { token, cars } = useRouteLoaderData("authLoader");
  const [filteredCars, setFilteredCars] = useState([]);
  const [isHoverUser, setIsHoverUser] = useState(false);

  function isHoverUpdater() {
    setIsHoverUser(!isHoverUser);
  }

  function updateUserSearch(e) {
    setFilteredCars(() => {
      if (e.target.value.trim().length > 0) {
        return cars.filter(
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
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      transition: { staggerChildren: 0.1 },
                      opacity: 1,
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  layout
                  className={styles.search_result}
                >
                  {filteredCars.slice(0, 4).map((car) => (
                    <motion.li
                      variants={{
                        hidden: { y: -10, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      key={car.car_id}
                    >
                      <Link to={`/rentacar/${car.car_id}`}>
                        {car.manufacturer} {car.model} {car.year}
                      </Link>
                    </motion.li>
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
              <motion.div
                onMouseEnter={isHoverUpdater}
                onMouseLeave={isHoverUpdater}
                className={styles.user_drop_down_wrapper}
              >
                <div>
                  <FontAwesomeIcon icon={faUser} />
                </div>

                <motion.ul
                  variants={{
                    hidden: { opacity: 0, visibility: "hidden" },
                    visible: {
                      transition: { staggerChildren: 0.1 },
                      opacity: 1,
                      visibility: "visible",
                    },
                  }}
                  initial="hidden"
                  animate={isHoverUser ? "visible" : "hidden"}
                  transition={{ duration: 0.1 }}
                >
                  <motion.li
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link to={"/user/account"}>Account</Link>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link to={"/user/reservations"}>Reservations</Link>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Link to={"/user/credit_cards"}>Credit Cards</Link>
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { y: -10, opacity: 0 },
                      visible: { y: 0, opacity: 1 },
                    }}
                  >
                    <Form action="/logout" method="post">
                      <button className={`${styles.button}`}>Logout</button>
                    </Form>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
