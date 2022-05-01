import styles from "./Book.module.css";
import { useState } from "react";

const Book = (props) => {
  const book = props.book;
  const check = props.favouriteList.some((element) => element.id === book.id);

  const [isFavourite, setIsFavourite] = useState(check);

  const addFavourite = () => {
    props.addToFavourites(book);
    setIsFavourite(true);
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
          {!isFavourite ? (
            <svg
              onClick={addFavourite}
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="15.8984"
                cy="15"
                rx="14.9609"
                ry="15"
                fill="#D43D1B"
              />
              <rect
                x="12.2593"
                y="4.05396"
                width="7.27829"
                height="21.8919"
                rx="3"
                fill="#FBFCD4"
              />
              <rect
                width="7.2973"
                height="21.8349"
                rx="3"
                transform="matrix(0.00144998 0.999999 -0.999999 0.00145757 26.8157 11.3513)"
                fill="#FBFCD4"
              />
            </svg>
          ) : (
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="15" cy="15" r="15" fill="#017E01" />
              <path
                d="M5.06184 18.1963C3.92312 16.9927 3.97565 15.094 5.17918 13.9553L6.12349 13.0618C7.32702 11.9231 9.22578 11.9756 10.3645 13.1791L15.3483 18.4466C16.4871 19.6501 16.4345 21.5489 15.231 22.6876L14.2867 23.5811C13.0832 24.7198 11.1844 24.6673 10.0457 23.4637L5.06184 18.1963Z"
                fill="white"
              />
              <path
                d="M20.4953 7.25747C21.5865 6.01068 23.4818 5.88454 24.7285 6.97572L25.7068 7.83188C26.9536 8.92306 27.0797 10.8184 25.9886 12.0652L15.469 24.0848C14.3779 25.3316 12.4826 25.4578 11.2358 24.3666L10.2575 23.5104C9.01072 22.4192 8.88458 20.5239 9.97576 19.2772L20.4953 7.25747Z"
                fill="white"
              />
            </svg>
          )}
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#FF4848" />
            <rect x="9" y="7" width="12" height="2" fill="white" />
            <rect x="12" y="6" width="6" height="2" rx="1" fill="white" />
            <rect x="10" y="10" width="10" height="12" fill="white" />
            <rect x="10" y="19" width="10" height="4" rx="1" fill="white" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Book;
