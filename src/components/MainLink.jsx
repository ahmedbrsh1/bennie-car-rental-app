import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function MainLink() {
  return (
    <>
      <Link to="/rentacar" className="button primary-button">
        Rent Now{" "}
        <FontAwesomeIcon
          icon={faCircleChevronRight}
          style={{ color: "#92c7a8" }}
        />
      </Link>
    </>
  );
}
