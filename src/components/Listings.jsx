import { Await } from "react-router-dom";
import CarPreview from "./CarPreview";
import styles from "./Listings.module.css";
import Search from "./Search";
import { Suspense } from "react";

export default function Listings({ cars, searchedCars }) {
  return (
    <>
      <div className={styles.listings_wrapper}>
        <div className={styles.search_wrapper}>
          <Search />
        </div>

        <div className={styles.car_preview_wrapper}>
          {!searchedCars && cars && (
            <Suspense fallback={<p className="loading">Loading...</p>}>
              <Await resolve={cars}>
                {(resolvedCars) => <CarPreview cars={resolvedCars} />}
              </Await>
            </Suspense>
          )}

          {searchedCars && <CarPreview cars={searchedCars} />}
        </div>
      </div>
    </>
  );
}
