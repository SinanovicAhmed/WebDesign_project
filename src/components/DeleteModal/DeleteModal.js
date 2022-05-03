import styles from "./DeleteModal.module.css";

const DeleteModal = (props) => {
  const deleteBook = (event) => {
    event.preventDefault();
    console.log(event);
  };
  return (
    <div className={styles.container}>
      <form onSubmit={deleteBook}>
        <input type="password" required placeholder="enter password" />
        <button>
          <svg
            onSubmit={deleteBook}
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="15" cy="15" r="15" fill="#017E01" />
            <path
              d="M5.06184 18.1963C3.92312 16.9927 3.97565 15.094 5.17918 13.9553L6.12349 13.0618C7.32702 11.9231 9.22578 11.9756 10.3645 13.1791L15.3483 18.4466C16.4871 19.6501 16.4345 21.5489 15.231 22.6876L14.2867 23.5811C13.0832 24.7198 11.1844 24.6673 10.0457 23.4637L5.06184 18.1963Z"
              fill="white"
            />
            <path
              d="M20.4953 7.25747C21.5865 6.01068 23.4818 5.88454 24.7285 6.97572L25.7068 7.83188C26.9536 8.92306 27.0797 10.8184 25.9886 12.0652L15.469 24.0848C14.3779 25.3316 12.4826 25.4578 11.2358 24.3666L10.2575 23.5104C9.01072 22.4192 8.88458 20.5239 9.97576 19.2772L20.4953 7.25747Z"
              fill="white"
            />
          </svg>
        </button>
      </form>

      <svg
        onClick={props.toggleModalFalse}
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="16.002"
          cy="15.9863"
          rx="15.0023"
          ry="14.9873"
          fill="#D43D1B"
        />
        <rect
          width="7.29482"
          height="21.8841"
          rx="3"
          transform="matrix(0.713633 0.700522 -0.701236 0.712927 21.3467 4.99561)"
          fill="#FBFCD4"
        />
        <rect
          width="7.29476"
          height="21.8843"
          rx="3"
          transform="matrix(0.706432 -0.707779 0.708489 0.705724 6.16821 10.3186)"
          fill="#FBFCD4"
        />
      </svg>
    </div>
  );
};

export default DeleteModal;
