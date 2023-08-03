import React from "react";
import styles from './NotFoundPAge.module.scss';
import classnames from 'classnames';
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const OnClickNavBtn = () => {
    navigate('/', {replace: true})
  };
  return (
    <article className={styles.main}>
      <div className={styles.mainContent}>
        <h1 className={styles.title}>
          <span
            className={classnames(styles.title__letter, styles.title__letter1)}
          >
            4
          </span>
          <span
            className={classnames(styles.title__letter, styles.title__letter2)}
          >
            0
          </span>
          <span
            className={classnames(styles.title__letter, styles.title__letter3)}
          >
            4
          </span>
        </h1>
        <h3 className={styles.subtitle}>Сторінка не була знайдена</h3>
        <h4 className={styles.subtext}>
          на жаль ми не змогли знайти сторінку по вашому запиту
        </h4>
        <button className={styles.navBtn} onClick={OnClickNavBtn} type="button">
          На головну
        </button>
      </div>
    </article>
  );
};

export default NotFoundPage;
