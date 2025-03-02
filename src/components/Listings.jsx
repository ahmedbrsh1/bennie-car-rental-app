import { useState } from "react";
import CarPreview from "./CarPreview";
import styles from "./Listings.module.css";
import Search from "./Search";

export default function Listings({ cars, searchedCars }) {
  const [searchObject, setSearchObject] = useState({
    body: "",
    manufacturer: "",
    model: "",
  });
  console.log(searchObject);

  function updateSearchObject(identifier, newValue) {
    setSearchObject((searchObject) => {
      return {
        ...searchObject,
        [identifier]: newValue,
      };
    });
  }

  return (
    <>
      <div className={styles.listings_wrapper}>
        <div className={styles.search_wrapper}>
          <Search />
        </div>
        <div className={styles.car_preview_wrapper}>
          <div className={styles.secondary_search_wrapper}>
            <select
              onChange={(e) => {
                updateSearchObject("body", e.target.value);
              }}
              name="body"
              id="body"
              value={searchObject.body}
            >
              <option value="" disabled selected>
                Select your option
              </option>
              {cars
                .filter(
                  (car, index, self) =>
                    index ===
                    self.findIndex((c) => c.body_type === car.body_type)
                )
                .map((car, index) => (
                  <option key={index} value={car.body_type}>
                    {car.body_type}
                  </option>
                ))}
            </select>
            <select
              onChange={(e) => {
                updateSearchObject("manufacturer", e.target.value);
              }}
              name="manufacturer"
              id="manufacturer"
              value={searchObject.manufacturer}
            >
              <option value="" disabled selected>
                Select your option
              </option>
              {cars
                .filter((car) => car.body_type === searchObject.body)
                .filter(
                  (car, index, self) =>
                    index ===
                    self.findIndex((c) => c.manufacturer === car.manufacturer)
                )
                .map((car, index) => (
                  <option key={index} value={car.manufacturer}>
                    {car.manufacturer}
                  </option>
                ))}
            </select>

            <select
              onChange={(e) => {
                updateSearchObject("model", e.target.value);
              }}
              name="model"
              id="model"
              value={searchObject.model}
            >
              <option value="" disabled selected>
                Select your option
              </option>
              {cars
                .filter((car) => car.body_type === searchObject.body)
                .filter((car) => car.manufacturer === searchObject.manufacturer)
                .filter(
                  (car, index, self) =>
                    index === self.findIndex((c) => c.model === car.model)
                )
                .map((car, index) => (
                  <option value={car.model} key={index}>
                    {car.model}
                  </option>
                ))}
            </select>
          </div>

          {!searchedCars && cars && <CarPreview cars={cars} />}
          {searchedCars && <CarPreview cars={searchedCars} />}
        </div>
      </div>
    </>
  );
}
