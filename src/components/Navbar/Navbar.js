import styles from "./Navbar.module.css";
import React from "react";
const Navbar = (props) => {
  const favouriteButton = () => {
    props.pageChange("favourite");
  };
  const addBookButton = () => {
    props.pageChange("addBook");
  };
  const addAuthorButton = () => {
    props.pageChange("addAuthor");
  };
  const homeButton = () => {
    props.pageChange("home");
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.nav_logo} onClick={homeButton}>
        biblio
      </h2>
      <div className={styles.nav_selection}>
        <p onClick={favouriteButton}>favourites</p>
        <p onClick={addBookButton}>add book</p>
        <p onClick={addAuthorButton}>add author</p>
      </div>
    </div>
  );
};

export default Navbar;
