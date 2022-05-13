import styles from "./AddBook.module.css";
import React from "react";
const AddBook = (props) => {
  let authorList =
    props.authors.length > 0 &&
    props.authors.map((author, index) => {
      return (
        <option key={index} value={author.name}>
          {author.name}
        </option>
      );
    }, this);
  //check if link is image(not finished)
  const checkIfImageExists = (url, callback) => {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      img.onerror = () => {
        callback(false);
      };
    }
  };
  //post function
  const postFunction = async (book) => {
    try {
      const response = await fetch(
        "https://ptf-web-dizajn-2022.azurewebsites.net/books",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(book),
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
      window.alert(
        "Something went wrong! Book is not posted. Please try again."
      );
    }
  };
  //form submit
  const submitForm = (event) => {
    let imageStatus;
    event.preventDefault();
    let author = props.authors.filter(function(value, index, arr) {
      return value.name === event.target[3].value;
    });

    let book = {
      name: event.target[0].value,
      genre: event.target[1].value,
      image: event.target[2].value,
      authorId: author[0].id,
    };

    checkIfImageExists(book.image, (exists) => {
      if (exists) {
        imageStatus = true;
      } else {
        imageStatus = false;
      }
    });

    if (imageStatus === true && event.target[4].value === "admin12345") {
      postFunction(book);
      event.target[0].value = event.target[1].value = event.target[2].value = event.target[3].value = event.target[4].value =
        "";
    } else {
      window.alert("Image link or password is not valid!");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h2>Add new book</h2>
        <form className={styles.book_form} onSubmit={submitForm}>
          <label>Title</label>
          <input type="text" required />
          <label>Genre</label>
          <input type="text" required />
          <label>Image link</label>
          <input type="text" required />
          <label>Author</label>
          <select name="author" required>
            <option value=""></option>
            {authorList}
          </select>
          <label>Administration password</label>
          <input type="password" required />
          <button>Add Book</button>
        </form>
      </div>
      <button></button>
    </div>
  );
};

export default AddBook;
