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
  const navBarStyle = {
    borderBottom: "4px solid #D43D1B",
    borderRadius: "1rem",
  };
  console.log(props.currentPage);
  return (
    <div className={styles.container}>
      <h2 className={styles.nav_logo} onClick={homeButton}>
        biblio
      </h2>
      <div className={styles.nav_selection}>
        <p
          onClick={favouriteButton}
          style={props.currentPage === "favourite" ? navBarStyle : {}}
        >
          favourites
        </p>
        <p
          onClick={addBookButton}
          style={props.currentPage === "addBook" ? navBarStyle : {}}
        >
          add book
        </p>
        <p
          onClick={addAuthorButton}
          style={props.currentPage === "addAuthor" ? navBarStyle : {}}
        >
          add author
        </p>
      </div>
    </div>
  );
};

export default Navbar;
