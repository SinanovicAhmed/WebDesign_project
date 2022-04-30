import "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import BookDisplay from "./components/BookDisplay/BookDisplay";
import FavouriteBooks from "./components/FavouriteBooks/FavouriteBooks";
import { useState, useEffect } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
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
  }, []);
  const pageChange = (page) => {
    setCurrentPage(page);
  };
  console.log(currentPage);
  return (
    <div>
      <Navbar pageChange={pageChange} />
      {currentPage === "home" ? (
        <BookDisplay books={books} authors={authors} />
      ) : (
        <FavouriteBooks />
      )}
    </div>
  );
}

export default App;
