import { useNavigate } from "react-router-dom";
import styles from "./CarDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faRoad,
  faUser,
  faWallet,
  faGear,
  faCar,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function CarDetails({ car }) {
  const carImageSrc = `/images/car/${car.car_id}.png`;
  const navigate = useNavigate();
  const monthName = new Date().toLocaleString("default", { month: "long" });
  console.log(car.reservations);

  function goToBooking() {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("booking");
    } else {
      navigate("/login");
    }
  }

  return (
    <>
      <div className="container">
        <div className={styles.car_details_wrapper}>
          <div className={styles.car_image_wrapper}>
            <img src={carImageSrc} alt="" />
            {/* <div className={styles.stars_wrapper}>
              <div></div>
              <span></span>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div> */}

            <h3>Available On</h3>
            <div className={styles.calendar}>
              <h3 className={styles.month_name}>{monthName}</h3>
              <ul>
                {Array.from({ length: 31 }, (_, i) => (
                  <li key={i + 1}>{i + 1}</li>
                ))}
              </ul>
            </div>
            <div className={styles.customer_reviews}>
              <h2>See What Customers Said About This Vehicle</h2>
              <ul>
                <li>
                  <div className={styles.user}>
                    <div className={styles.user_pfp}>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={styles.user_info}>
                      <h3>John Doe</h3>
                      <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum deleniti, atque necessitatibus voluptate sapiente
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={styles.user}>
                    <div className={styles.user_pfp}>
                      <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className={styles.user_info}>
                      <h3>John Doe</h3>
                      <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Harum deleniti, atque necessitatibus voluptate sapiente
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.car_info_wrapper}>
            <div className={styles.text_wrapper}>
              <h2>
                {car.manufacturer} {car.model} {car.year}
              </h2>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faUser} /> {car.capacity} People
                </li>
                <li>
                  <FontAwesomeIcon icon={faGear} /> {car.gear}
                </li>
                <li>
                  <FontAwesomeIcon icon={faGasPump} /> {car.fuel_type}
                </li>
                <li>
                  <FontAwesomeIcon icon={faCar} /> {car.body_type}
                </li>
                <li>
                  <FontAwesomeIcon icon={faGasPump} /> {car.engine}
                </li>
                <li>
                  <FontAwesomeIcon icon={faRoad} /> {car.mileage} Km
                </li>
                <li>
                  <FontAwesomeIcon icon={faWind} />{" "}
                  {(car.air_conditioning == 1 && "Yes") ||
                    (car.air_conditioning == 0 && "No")}
                </li>
              </ul>
              <h3>
                <FontAwesomeIcon icon={faWallet} /> Price Per Day
              </h3>
              <h4>{car.price_per_day} EGP</h4>
            </div>

            <div className="button-container">
              <button onClick={goToBooking} className="button primary-button">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
