import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./SocialMedia.module.css";

export default function SocialMedia() {
  return (
    <div className={styles.links_container}>
      <Link>
        <div className={styles.circle_border}>
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </Link>

      <Link>
        <div className={styles.circle_border}>
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </Link>

      <Link>
        <div className={styles.circle_border}>
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </Link>

      <Link>
        <div className={styles.circle_border}>
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
      </Link>
    </div>
  );
}
