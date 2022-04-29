import styles from "./Navbar.module.css";
import React from "react";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.nav_logo}>biblio</h2>
      <div className={styles.nav_selection}>
        <p>favourites</p>
        <p>add book</p>
        <p>add author</p>
      </div>
    </div>
  );
};

export default Navbar;
