import React from "react";
import { Fragment } from "react";
import styles from "./BookDisplay.module.css";
import Book from "./Book";
const BookDisplay = (props) => {
  let genreList =
    props.books.length > 0 &&
    props.books.map((book) => {
      return <option value={book.genre}>{book.genre}</option>;
    }, this);

  let authorList =
    props.authors.length > 0 &&
    props.authors.map((author) => {
      return <option value={author.name}>{author.name}</option>;
    }, this);

  return (
    <div className={styles.container}>
      <div className={styles.filter_section}>
        <select name="genre" id="genre">
          <option value="genre">genre</option>
          {genreList}
        </select>
        <select name="author">
          <option value="author">author</option>
          {authorList}
        </select>
        <button className={styles.refresh_button}>refresh</button>
      </div>
      <div className={styles.display_section}>
        {props.books.map((book) => (
          <Book book={book} />
        ))}
        <Book />
        <Book />
      </div>
    </div>
  );
};

export default BookDisplay;
