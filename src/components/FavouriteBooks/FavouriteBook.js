import styles from "./FavouriteBook.module.css";
import React from "react";
const FavouriteBook = (props) => {
  const book = props.book;

  const removeFavourite = () => {
    props.removeFavourite(book);
  };
  return (
    <div className={styles.container}>
      <img src={book.image} alt="Book" width="230" height="350" />
      <div className={styles.book_info}>
        <div className={styles.book_author}>
          <h2>{book.name}</h2>
          <p>by {book.author.name}</p>
        </div>
        <div className={styles.book_buttons}>
          <svg
            onClick={removeFavourite}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#D43D1B" />
            <rect
              x="25.9459"
              y="11.3513"
              width="7.2973"
              height="21.8919"
              rx="3"
              transform="rotate(89.9167 25.9459 11.3513)"
              fill="#FBFCD4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default FavouriteBook;
