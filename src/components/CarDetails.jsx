import { Link, useNavigate } from "react-router-dom";
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
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CarDetails({ car }) {
  const carImageSrc = `/images/car/${car.car_id}.png`;
  const navigate = useNavigate();
  const monthName = new Date().toLocaleString("default", { month: "long" });

  let calendar = {
    1: "Not Reserved",
    2: "Not Reserved",
    3: "Not Reserved",
    4: "Not Reserved",
    5: "Not Reserved",
    6: "Not Reserved",
    7: "Not Reserved",
    8: "Not Reserved",
    9: "Not Reserved",
    10: "Not Reserved",
    11: "Not Reserved",
    12: "Not Reserved",
    13: "Not Reserved",
    14: "Not Reserved",
    15: "Not Reserved",
    16: "Not Reserved",
    17: "Not Reserved",
    18: "Not Reserved",
    19: "Not Reserved",
    21: "Not Reserved",
    22: "Not Reserved",
    23: "Not Reserved",
    24: "Not Reserved",
    25: "Not Reserved",
    26: "Not Reserved",
    27: "Not Reserved",
    28: "Not Reserved",
    29: "Not Reserved",
    30: "Not Reserved",
    31: "Not Reserved",
  };

  function checkReservations() {
    car.reservations.map((reservation) => {
      const startDay = new Date(reservation.book_date).getDate();
      const endDay = new Date(reservation.return_date).getDate();

      Object.keys(calendar).forEach((day) => {
        day = Number(day);
        if (day >= startDay && day <= endDay) {
          calendar[day] = "Reserved";
        }
      });
    });
  }
  checkReservations();

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

            <h3 className="color-nero">Available On</h3>
            <div className={styles.calendar}>
              <h3 className={styles.month_name}>{monthName}</h3>
              <ul>
                {Object.entries(calendar).map(([day, status]) => (
                  <li
                    key={day}
                    className={status === "Reserved" ? styles.reserved : ""}
                  >
                    {day}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.customer_reviews}>
              <h2>See What Customers Said About This Vehicle</h2>
              {car.reviews.length > 0 && (
                <ul>
                  {car.reviews.map((review) => (
                    <li>
                      <div className={styles.user}>
                        <div className={styles.user_pfp}>
                          <FontAwesomeIcon icon={faUser} />
                        </div>
                        <div className={styles.user_info}>
                          <h3>{review.user_name}</h3>
                          <div>
                            {Array.from({ length: review.rate }).map((_, i) => (
                              <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                          </div>
                          <p className="paragraph">{review.review}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <li>
                <div className={styles.user}>
                  <div className={styles.user_pfp}>
                    <FontAwesomeIcon icon={faUser} />
                  </div>
                  <div className={styles.user_info}>
                    <h3>John Doe</h3>
                    <div>
                      {Array.from({ length: 3 }).map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                    </div>
                    <p className="paragraph">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Harum deleniti, atque necessitatibus voluptate sapiente
                    </p>
                  </div>
                </div>
              </li>
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
              <Link
                to={`/rentacar/${car.car_id}/booking`}
                className="button primary-button"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
