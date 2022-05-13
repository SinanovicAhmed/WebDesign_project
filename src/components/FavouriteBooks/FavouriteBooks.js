import styles from "./FavouriteBooks.module.css";
import FavouriteBook from "./FavouriteBook";
import React from "react";
const FavouriteBooks = (props) => {
  const removeFavourite = (book) => {
    props.removeFavourite(book);
  };
  return (
    <div className={styles.container}>
      <h3>Favourite Books</h3>
      <div className={styles.display_section}>
        {props.favouriteList.map((book) => (
          <FavouriteBook
            key={Math.random() * 2.5}
            book={book}
            removeFavourite={removeFavourite}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouriteBooks;
