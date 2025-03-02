import Background from "../../public/images/landing.jpg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import MainLink from "./MainLink";

export default function Header() {
  return (
    <>
      <header
        className={styles.header}
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className={styles.overlay}></div>
        <div
          className={`${styles.green_object} ${styles.top_left_green} `}
        ></div>
        {/* <div
          className={`${styles.green_object} ${styles.center_right_green} `}
        ></div> */}
        <div className="container">
          <div className={styles.landing_text}>
            <h3 className="green-header">Welcome</h3>
            <h1 className="large-header" style={{ color: "var(--text)" }}>
              #1 Car Rent Service <br /> In Your City
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              dolorum odio deleniti consequatur, maxime voluptates ipsam, saepe
              tempore quaerat molestiae doloremque architecto, facilis suscipit
              blanditiis quam repudiandae quasi porro impedit.
            </p>

            <div className={styles.links}>
              <MainLink />

              <Link to={"/about"} className="button secondary-button">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
