import styles from "./UpdateForm.module.css";
import React from "react";
const UpdateForm = (props) => {
  let authorList =
    props.authors.length > 0 &&
    props.authors.map((author, index) => {
      return (
        <option key={index} value={author.name}>
          {author.name}
        </option>
      );
    }, this);

  const submitForm = async (event) => {
    let author = props.authors.filter(function (value, index, arr) {
      return value.name === event.target[3].value;
    });
    event.preventDefault();
    let newBook = {
      bookId: props.book.id,
      name: event.target[0].value,
      genre: event.target[1].value,
      image: event.target[2].value,
      authorId: author[0].id,
    };

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
    const putFunction = async (newBook) => {
      try {
        const response = await fetch(
          "https://ptf-web-dizajn-2022.azurewebsites.net/books",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
        window.alert(
          "Something went wrong! Book is not updated. Please try again."
        );
      }
    };
    // if new submited book is same as previous we shouldnt do anything
    if (newBook !== props.book) {
      let imageStatus; //if image is not changed we can asume it exist because we checked it

      checkIfImageExists(newBook.image, (exists) => {
        if (exists) {
          imageStatus = true;
        } else {
          imageStatus = false;
        }
      });

      if (imageStatus === true && event.target[4].value === "admin12345") {
        await putFunction(newBook);
        props.setFetchFunction();
      } else {
        window.alert("Image link or password is not valid!");
      }
    }
  };

  return (
    <form className={styles.book_form} onSubmit={submitForm}>
      <label>Title</label>
      <input type="text" required defaultValue={props.book.name} />
      <label>Genre</label>
      <input type="text" required defaultValue={props.book.genre} />
      <label>Image link</label>
      <input type="text" required defaultValue={props.book.image} />
      <label>Author</label>
      <select name="author" required defaultValue={props.book.author.name}>
        <option value=""></option>
        {authorList}
      </select>
      <label>Administration password</label>
      <input type="password" required />
      <button>Update Book</button>
    </form>
  );
};
export default UpdateForm;
