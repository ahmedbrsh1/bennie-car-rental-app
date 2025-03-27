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
          {!searchedCars && cars && <CarPreview cars={cars} />}
          {searchedCars && <CarPreview cars={searchedCars} />}
        </div>
      </div>
    </>
  );
}
