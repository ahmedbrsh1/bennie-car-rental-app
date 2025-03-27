import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate(-1);
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />

      <motion.dialog
        initial={{ opacity: 0, x: "-50%", y: "calc(-50% - 30px)" }}
        animate={{ opacity: 1, y: "-50%" }}
        transition={{ duration: 0.3, bounce: 0, type: "spring" }}
        open
        className={classes.modal}
      >
        {children}
      </motion.dialog>
    </>
  );
}

export default Modal;
