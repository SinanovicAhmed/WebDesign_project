import styles from "./FavouriteBooks.module.css";
import Book from "../BookDisplay/Book";
import { useState } from "react";
const FavouriteBooks = (props) => {
  const [favouriteList, setFavouriteList] = useState();
  return (
    <div className={styles.container}>
      <h2>Favourite Books</h2>
      <div className={styles.display_section}>
        {favouriteList.map((book) => (
          <Book key={Math.random() * 2.5} book={book} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteBooks;
