import styles from "./AddBook.module.css";
const AddBook = (props) => {
  let authorList =
    props.authors.length > 0 &&
    props.authors.map((author) => {
      return <option value={author.name}>{author.name}</option>;
    }, this);
  //check if link is image(not finished)
  const checkImage = async (url) => {
    console.log(url);
    const res = await fetch(url);
    const buff = await res.blob();
    console.log(res, buff);
    //return buff.type.startsWith("image/") && res.status === 200;
  };
  //form submit
  const submitForm = (event) => {
    let imageStatus;
    event.preventDefault();
    let author = props.authors.filter(function (value, index, arr) {
      return value.name === event.target[3].value;
    });

    let book = {
      name: event.target[0].value,
      genre: event.target[1].value,
      image: event.target[2].value,
      author: author[0].id,
    };
    //(not finished)
    checkImage(book.image).then(function (result) {
      imageStatus = result;
    });
    if ((imageStatus = true && event.target[4].value === "admin12345")) {
      console.log("working");
    }
    //(not finished)
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
    </div>
  );
};

export default AddBook;
