import React from "react";
import styles from "./Feedback.module.scss";

const Feedback = ({ client }) => {
  const { name, age, photo, text } = client;
  return (
    <>
      <div className={styles.container}>
        <p className={styles.feedbackText}>{text}</p>
        <div className={styles.feedbackAuthor}>
          <img src={photo} alt={`feedback by ${name}`} />
          <div className={styles.feedbackAuthorName}>
            <h3>{name}</h3>
            <p>
              {age}{" "}
              {`${age}`.endsWith(1)
                ? "рік"
                : `${age}`.endsWith(2) ||
                  `${age}`.endsWith(3) ||
                  `${age}`.endsWith(4)
                ? "роки"
                : "років"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
