import React from "react";
import styles from "./Feedback.module.scss";
import { useSelector } from "react-redux";
import { getLanguage } from "../../../redux/selectors";

const Feedback = ({ client }) => {
  const { name_UK, name_EN, age, photo, text_UK, text_EN } = client;
  const language = useSelector(getLanguage);
  return (
    <>
      <div className={styles.container}>
        <p className={styles.feedbackText}>
          {language === "uk" ? text_UK : text_EN}
        </p>
        <div className={styles.feedbackAuthor}>
          <img src={photo} alt={`feedback by ${name_EN}`} />
          <div className={styles.feedbackAuthorName}>
            <h3>{language === "uk" ? name_UK : name_EN}</h3>
            <p>
              {age}{" "}
              {language === "uk"
                ? `${age}`.endsWith(1)
                  ? "рік"
                  : `${age}`.endsWith(2) ||
                      `${age}`.endsWith(3) ||
                      `${age}`.endsWith(4)
                    ? "роки"
                    : "років"
                : age === 1
                  ? "year"
                  : "years"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
