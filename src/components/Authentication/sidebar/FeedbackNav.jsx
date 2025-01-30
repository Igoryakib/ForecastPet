/* eslint-disable no-array-constructor */
import React from 'react';
import styles from "./FeedbackNav.module.scss";

const FeedbackNav = function ({ number, activeFeedback, setActiveFeedback }) {
  return (
    <div className={styles.container}>
      {Array(number)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className={`${styles.circle} ${
              activeFeedback === i + 1 ? styles.active : ""
            }`}
            onClick={() => setActiveFeedback(i + 1)}
          >
            &nbsp;
          </div>
        ))}
    </div>
  );
};

export default FeedbackNav;
