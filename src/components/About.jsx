import styles from "./About.module.css";
import image from "../../public/images/2149149578.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faHeadphones,
  faStar,
  faSuitcase,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import MainLink from "./MainLink";
import SocialMedia from "./SocialMedia";
import InformationSection from "./InformationSection";

export default function About() {
  return (
    <>
      <section>
        <div className="container">
          <div className={styles.about_container}>
            <div className={styles.text_container}>
              <h3 className="green-header">About us</h3>
              <h1 className="large-header" style={{ marginBottom: "0.5em" }}>
                We are the largest
                <br /> <span className="color-green"> Car Rental Center</span>
              </h1>
              <p className="paragraph">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
                voluptate eligendi labore corporis adipisci reiciendis expedita
                sequi officiis id fugiat, qui doloremque ex repellat, nulla
                aperiam obcaecati, perspiciatis perferendis! Fugiat?
              </p>
              <div className={styles.numbers_container}>
                <div>
                  <FontAwesomeIcon icon={faSuitcase} className={styles.green} />
                  <span className={styles.number}>25</span>
                  <span className={styles.green}>+</span>
                  <p className="paragraph">Years of Experiences</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCar} className={styles.green} />
                  <span className={styles.number}>80</span>
                  <span className={styles.green}>+</span>
                  <p className="paragraph">Cars Ready for Rent</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faStar} className={styles.green} />
                  <span className={styles.number}>15</span>
                  <span className={styles.green}>+</span>
                  <p className="paragraph">Business Awards</p>
                </div>
              </div>
              <div className={styles.link_container}>
                <MainLink />
                <SocialMedia />
              </div>
            </div>
            <div className={styles.image_container}>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="seperating-border"></div>
      <InformationSection
        greenHeader={"Our Differient"}
        mainHeader={"Why Choose"}
        mainHeaderGreen={"Us"}
        paragraph={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim voluptate eligendi labore corporis adipisci reiciendis expedita sequi officiis id fugiat, qui doloremque ex repellat, nulla aperiam obcaecati, perspiciatis perferendis! Fugiat?"
        }
      >
        <div>
          <FontAwesomeIcon icon={faCar} />
          <h2>Variety of Car Brands</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
            aperiam eos laboriosam quam explicabo consequuntur itaque cum
            perspiciatis. Corporis repudiandae.
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faThumbsUp} />
          <h2>Best Rate Gurantee</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
            aperiam eos laboriosam quam explicabo consequuntur itaque cum
            perspiciatis. Corporis repudiandae.
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeadphones} />
          <h2>Awesome Customer Support</h2>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsa
            aperiam eos laboriosam quam explicabo consequuntur itaque cum
            perspiciatis. Corporis repudiandae.
          </p>
        </div>
      </InformationSection>
    </>
  );
}
