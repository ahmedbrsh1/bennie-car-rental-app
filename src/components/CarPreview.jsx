import { Link } from "react-router-dom";
import styles from "./CarPreview.module.css";
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
import { motion } from "motion/react";

export default function CarPreview({ cars }) {
  const carImages = {
    1: "/images/car/1.png",
    2: "/images/car/2.png",
    3: "/images/car/3.png",
    4: "/images/car/4.png",
    5: "/images/car/5.png",
    6: "/images/car/6.png",
    7: "/images/car/7.png",
    8: "/images/car/8.png",
    9: "/images/car/9.png",
    10: "/images/car/10.png",
    11: "/images/car/11.png",
    12: "/images/car/12.png",
    13: "/images/car/13.png",
    14: "/images/car/14.png",
    15: "/images/car/15.png",
    16: "/images/car/16.png",
    17: "/images/car/17.png",
    18: "/images/car/18.png",
    19: "/images/car/19.png",
    20: "/images/car/20.png",
    21: "/images/car/21.png",
    22: "/images/car/22.png",
    23: "/images/car/23.png",
    24: "/images/car/24.png",
    25: "/images/car/25.png",
  };

  return (
    <>
      {(!cars?.isError && (
        <motion.ul layout className={styles.ul}>
          {cars.map((car) => {
            return (
              <li className={styles.li} key={car.car_id}>
                <Link to={`/rentacar/${car.car_id}`}>
                  <div>
                    <img src={carImages[car.car_id]} alt="Car Image" />
                  </div>

                  <h3>
                    {car.manufacturer} {car.model} {car.year}
                  </h3>
                  <ul className={styles.car_info}>
                    <li>
                      <FontAwesomeIcon className={styles.icon} icon={faUser} />{" "}
                      {car.capacity} People
                    </li>
                    <li>
                      <FontAwesomeIcon className={styles.icon} icon={faGear} />{" "}
                      {car.gear}
                    </li>
                    <li>
                      <FontAwesomeIcon
                        className={styles.icon}
                        icon={faGasPump}
                      />{" "}
                      {car.fuel_type}
                    </li>

                    <li>
                      <FontAwesomeIcon className={styles.icon} icon={faWind} />{" "}
                      {(car.air_conditioning == 1 && "Yes") ||
                        (car.air_conditioning == 0 && "No")}
                    </li>
                  </ul>
                  <h3>
                    <FontAwesomeIcon className={styles.icon} icon={faWallet} />{" "}
                    Price Per Day
                  </h3>
                  <h4>{car.price_per_day} EGP</h4>
                </Link>
              </li>
            );
          })}
        </motion.ul>
      )) || <p className="danger">{cars.message}</p>}
    </>
  );
}
