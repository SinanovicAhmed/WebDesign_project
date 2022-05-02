import styles from "./AddAuthor.module.css";
const AddAuthor = () => {
  const postFunction = async (authorName) => {
    try {
      const response = await fetch(
        "https://ptf-web-dizajn-2022.azurewebsites.net/authors",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: authorName }),
        }
      );
    } catch (error) {
      console.log(error);
      window.alert(
        "Something went wrong! Author is not posted. Please try again."
      );
    }
  };

  const submitAuthor = (event) => {
    event.preventDefault();
    let aurhorName = `${event.target[0].value} ${event.target[1].value}`;
    if (event.target[2].value === "admin12345") {
      postFunction(aurhorName);
    } else {
      window.alert("Password is not valid!");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
        <h2>Add new author</h2>
        <form className={styles.book_form} onSubmit={submitAuthor}>
          <label>Name</label>
          <input type="text" required />
          <label>Surname</label>
          <input type="text" required />
          <label>Administration password</label>
          <input type="password" required />
          <button>Add Author</button>
        </form>
      </div>
    </div>
  );
};

export default AddAuthor;
