import { Form } from "react-router-dom";
import Modal from "./Modal";
import classes from "./Branch.module.css";
export default function Branch({ branches }) {
  const branchImages = {
    1: "/images/branch-1.jpg",
    2: "/images/branch-2.jpg",
    3: "/images/branch-3.jpg",
  };
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <h1>Hi, Please Select The Nearest Branch To You</h1>
        <ul className={classes.ul}>
          {branches.map((branch) => {
            return (
              <li key={branch.branch_id}>
                <img
                  className={classes.img}
                  src={branchImages[branch.branch_id]}
                  alt=""
                />
                <h3>{branch.location}</h3>

                <input
                  id="location"
                  type="radio"
                  name="location"
                  value={branch.branch_id}
                />
              </li>
            );
          })}
        </ul>
        <div className="buttoncontainer">
          <button className="button">Select</button>
        </div>
      </Form>
    </Modal>
  );
}
