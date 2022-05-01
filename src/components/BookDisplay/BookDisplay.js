import React from "react";
import styles from "./BookDisplay.module.css";
import Book from "./Book";
import { useEffect } from "react";
import { useState } from "react";
const BookDisplay = (props) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  //first time component is created props.book is still empty so nothing renders until refresh
  useEffect(() => {
    setFilteredBooks(props.books);
  }, [props.books]);

  //getting all genres and authors from api
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

  //filter book
  const filterBooks = (event) => {
    event.preventDefault();
    let genre = event.target[0].value;
    let author = event.target[1].value;
    let filteredList = props.books;

    if (genre !== "genre") {
      filteredList = props.books.filter(function (value, index, arr) {
        return value.genre === genre;
      });
    }
    if (author !== "author") {
      filteredList = filteredList.filter(function (value, index, arr) {
        console.log(value);
        return value.author.name === author;
      });
    }
    setFilteredBooks(filteredList);
  };

  const addToFavourites = (book) => {
    props.addToFavourites(book);
  };
  return (
    <div className={styles.container}>
      <form className={styles.filter_section} onSubmit={filterBooks}>
        <select name="genre" id="genre">
          <option value="genre">genre</option>
          {genreList}
        </select>
        <select name="author">
          <option value="author">author</option>
          {authorList}
        </select>
        <button className={styles.refresh_button}>refresh</button>
      </form>
      <div className={styles.display_section}>
        {filteredBooks.map((book) => (
          <Book
            key={Math.random() * 2.5}
            book={book}
            addToFavourites={addToFavourites}
            favouriteList={props.favouriteList}
          />
        ))}
      </div>
    </div>
  );
};

export default BookDisplay;
