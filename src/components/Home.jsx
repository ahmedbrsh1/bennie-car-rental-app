import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Header";
import InformationSection from "./InformationSection";

import {
  faLocationDot,
  faRoute,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import CarPreview from "./CarPreview";

export default function Home({ cars }) {
  return (
    <>
      <Header />
      <div className="seperating-border"></div>
      <InformationSection
        greenHeader={"How Does It Work"}
        mainHeader={"Rent Your Car"}
        mainHeaderGreen={"With 3 Simple Steps"}
        paragraph={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sequi excepturi autem cumque, voluptatem voluptatibus accusantium incidunt modi pariatur aut provident commodi dignissimos consequuntur, in sunt, porro quibusdam rem. Dolore!"
        }
      >
        <div>
          <FontAwesomeIcon icon={faLocationDot} />
          <h2>Search Location</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptas rem voluptatibus error at nostrum itaque nobis quis vel
            aspernatur labore, nemo tenetur quae tempora quos velit nesciunt
            esse repellat.
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCar} />
          <h2>Select Your Car</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptas rem voluptatibus error at nostrum itaque nobis quis vel
            aspernatur labore, nemo tenetur quae tempora quos velit nesciunt
            esse repellat.
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faRoute} />
          <h2>Enjoy Your Ride</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            voluptas rem voluptatibus error at nostrum itaque nobis quis vel
            aspernatur labore, nemo tenetur quae tempora quos velit nesciunt
            esse repellat.
          </p>
        </div>
      </InformationSection>
      <div className="seperating-border"></div>
      <InformationSection
        greenHeader={"News & Insights"}
        mainHeader={"Our Latest"}
        mainHeaderGreen={"Articles & Blogs"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis aspernatur neque dolores mollitia molestias obcaecati quas esse, illo doloremque provident perferendis placeat maxime! Non accusantium reiciendis modi saepe aliquam?"
        }
      >
        <article>
          <img src="" alt="" />
          <span>January 27, 2025</span>
          <h2>What To Do When Rental Car Meets An Accident</h2>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae assumenda ullam facilis, fuga quasi, voluptas, ipsa
            consequatur dicta unde recusandae deserunt vitae temporibus! Natus
            assumenda sint, unde veritatis amet reprehenderit?
          </p>
          <Link style={{ color: "var(--nero)" }}>Read More</Link>
        </article>
        <article>
          <img src="" alt="" />
          <span>January 27, 2025</span>
          <h2>What To Do When Rental Car Meets An Accident</h2>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae assumenda ullam facilis, fuga quasi, voluptas, ipsa
            consequatur dicta unde recusandae deserunt vitae temporibus! Natus
            assumenda sint, unde veritatis amet reprehenderit?
          </p>
          <Link style={{ color: "var(--nero)" }}>Read More</Link>
        </article>
        <article>
          <img src="" alt="" />
          <span>January 27, 2025</span>
          <h2>What To Do When Rental Car Meets An Accident</h2>
          <p className="paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae assumenda ullam facilis, fuga quasi, voluptas, ipsa
            consequatur dicta unde recusandae deserunt vitae temporibus! Natus
            assumenda sint, unde veritatis amet reprehenderit?
          </p>
          <Link style={{ color: "var(--nero)" }}>Read More</Link>
        </article>
      </InformationSection>
      <div className="seperating-border"></div>
      <InformationSection
        mainHeader={"Explore a Sample"}
        mainHeaderGreen={"Of Our Cars"}
        paragraph={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis aspernatur neque dolores mollitia molestias obcaecati quas esse, illo doloremque provident perferendis placeat maxime! Non accusantium reiciendis modi saepe aliquam?"
        }
      >
        <CarPreview cars={cars} />
      </InformationSection>
    </>
  );
}
