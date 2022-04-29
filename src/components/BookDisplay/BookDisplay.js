import React from "react";
import { Fragment } from "react";
import styles from "./BookDisplay.module.css";
const BookDisplay = () => {
  return (
    <React.Fragment>
      <div className={styles.filter_section}></div>
      <div className={styles.display_section}></div>
    </React.Fragment>
  );
};

export default BookDisplay;
