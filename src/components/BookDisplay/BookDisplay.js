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

  let genreList = props.books.map((book) => {
    return book.genre;
  });
  let uniqueGenreList = [...new Set(genreList)].map((genre) => {
    return <option value={genre}>{genre}</option>;
  });

  let authorList = props.authors.map((author) => {
    return <option value={author.name}>{author.name}</option>;
  });

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
        return value.author.name === author;
      });
    }
    setFilteredBooks(filteredList);
  };

  const addToFavourites = (book) => {
    props.addToFavourites(book);
  };

  const removeFromList = (id) => {
    let tempList = filteredBooks.filter(function (value, index, arr) {
      return value.id !== id;
    });
    setFilteredBooks(tempList);
  };
  return (
    <div className={styles.container}>
      <form className={styles.filter_section} onSubmit={filterBooks}>
        <select name="genre" id="genre">
          <option value="genre">genre (all)</option>
          {uniqueGenreList}
        </select>
        <select name="author">
          <option value="author">author (all)</option>
          {authorList}
        </select>
        <button className={styles.refresh_button}>refresh</button>
      </form>
      <div className={styles.display_section}>
        {filteredBooks.map((book) => (
          <Book
            key={book.id}
            book={book}
            authors={props.authors}
            addToFavourites={addToFavourites}
            favouriteList={props.favouriteList}
            removeFromList={removeFromList}
            setFetchFunction={props.setFetchFunction}
          />
        ))}
      </div>
    </div>
  );
};

export default BookDisplay;
