import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <section>
        <ul>
          <li>
            <Link className="secondary-link" to={"registercar"}>
              Register a Car
            </Link>
          </li>
          <li>
            <Link className="secondary-link" to={"reports"}>
              Reports
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
