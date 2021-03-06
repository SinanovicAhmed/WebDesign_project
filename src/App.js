import "./App.module.css";
import React from "react";
import AddAuthor from "./components/AddAuthor/AddAuthor";
import Navbar from "./components/Navbar/Navbar";
import BookDisplay from "./components/BookDisplay/BookDisplay";
import FavouriteBooks from "./components/FavouriteBooks/FavouriteBooks";
import AddBook from "./components/AddBook/AddBook";
import { useState, useEffect } from "react";

function App() {
  document.title = "Biblio";
  const [fetchUpdate, setFetchUpdate] = useState(false);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [favouriteBooks, setFavouriteBooks] = useState(() => {
    let tempValue;
    if (
      localStorage.getItem("favBooks") === "[]" ||
      JSON.parse(localStorage.getItem("favBooks")) === null
    ) {
      tempValue = [];
    } else {
      tempValue = JSON.parse(localStorage.getItem("favBooks"));
    }
    return tempValue;
  });

  //Pokusaj rerendera knjiga nakon updejta
  const setFetchFunction = () => {
    if (fetchUpdate === false) {
      setFetchUpdate(true);
    } else {
      setFetchUpdate(false);
    }
  };
  //Storing favourites into local storage
  useEffect(() => {
    localStorage.setItem("favBooks", JSON.stringify(favouriteBooks));
  }, [favouriteBooks]);
  //Books fetching
  const fetchBooks = async () => {
    const response = await fetch(
      "https://ptf-web-dizajn-2022.azurewebsites.net/books"
    );
    setBooks(await response.json());
  };
  //Authors fetching
  const fetchAuthors = async () => {
    const response = await fetch(
      "https://ptf-web-dizajn-2022.azurewebsites.net/authors"
    );
    setAuthors(await response.json());
  };

  //Initial fetching
  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, [currentPage, fetchUpdate]);

  const pageChange = (page) => {
    setCurrentPage(page);
  };

  const addToFavourites = (book) => {
    if (!favouriteBooks.some((element) => element.id === book.id)) {
      setFavouriteBooks((prevState) => [...prevState, book]);
    }
  };
  const removeFavourite = (book) => {
    const newList = favouriteBooks.filter((element, index, array) => {
      return element.id !== book.id;
    });
    setFavouriteBooks(newList);
  };

  return (
    <div>
      <Navbar pageChange={pageChange} currentPage={currentPage} />
      {(() => {
        switch (currentPage) {
          case "home":
            return (
              <BookDisplay
                books={books}
                authors={authors}
                addToFavourites={addToFavourites}
                favouriteList={favouriteBooks}
                fetchBooks={fetchBooks}
                setFetchFunction={setFetchFunction}
              />
            );
          case "favourite":
            return (
              <FavouriteBooks
                favouriteList={favouriteBooks}
                removeFavourite={removeFavourite}
              />
            );
          case "addBook":
            return <AddBook authors={authors} />;
          case "addAuthor":
            return <AddAuthor />;
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default App;
