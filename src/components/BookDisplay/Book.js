import styles from "./Book.module.css";

const Book = (props) => {
  const book = props.book;
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
            width="31"
            height="30"
            viewBox="0 0 31 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="15.8984" cy="15" rx="14.9609" ry="15" fill="#D43D1B" />
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
