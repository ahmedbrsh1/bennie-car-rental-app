import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainLink from "./MainLink";
import SocialMedia from "./SocialMedia";
import styles from "./WhyChooseUs.module.css";
import {
  faCar,
  faHeadphones,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
  return (
    <>
      <section>
        <div className="container">
          <div className={styles.why_choose_us_wrapper}>
            <div className={styles.text_container}>
              <h3 className="green-header">Our Differient</h3>
              <h1 className="large-header" style={{ marginBottom: "0.5em" }}>
                Why Choose
                <span className="color-green"> Us</span>
              </h1>
              <p className="paragraph"></p>
            </div>
            <div className={styles.differiences_container}></div>
          </div>

          <div className={styles.link_container}>
            <MainLink />
            <SocialMedia />
          </div>
        </div>
      </section>
    </>
  );
}
