import React, { useRef } from "react";
import styles from "./Footer.module.scss";
import { useSelector } from "react-redux";
import { getLanguage } from "../../redux/selectors";
import icon from "../../static/footerIcon.svg";
import { Link } from "react-router-dom";
import GithubIcon from "../../static/social/github.svg";
import useIsVisible from "../../utils/useIsVisible";

const Footer = () => {
  const language = useSelector(getLanguage);
  const year = new Date().getFullYear();
  const handleExternalLink = function (e, link) {
    e.preventDefault();
    window.location.assign(link);
  };

  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);
  console.log(isVisible)


  return (
    <footer className={styles.footer}>
      <span className={`${styles.divider} ${styles.divider1}`} />
      <span className={`${styles.divider} ${styles.divider2}`} />
      {/* <div className={styles.footerContent}>
        <h4 className={styles.footerTitle}>
          Copyright © {year}.{" "}
          {language === "uk"
            ? "Створено трьома молодими геніями для портфоліо. Не використовувати для комерційних цілей!"
            : "Is designed by three young prodigies. Do not use for commercial purposes!"}
        </h4>
        <h4 className={styles.footerTitle}>
          {language === "uk"
            ? "Вебдодаток “Прогноз погоди”"
            : 'Web-application "Weather forecast"'}
        </h4>
      </div> */}
      <img src={icon} alt="weather icon" className={`${styles.footerIcon} ${isVisible ? styles.appear : ''}`} />
      <div className={`${styles.footerContent} ${isVisible ? styles.appear : ''}`}>
        <h2 className={styles.footerTitle}>
          {language === "uk"
            ? "Погода. Легко і точно"
            : "Weather. Easy and specific"}{" "}
          <span>–</span>{" "}
          <strong className={styles.footerTitleStrong}>Forecast Fox</strong>{" "}
        </h2>
        <ul className={styles.links}>
          <Link to="/" className={styles.link} ref={elemRef}>
            <span className={styles.linkIcon}>👨</span>
            <span>{language === "uk" ? "Команда" : "Team"}</span>
          </Link>
          <Link to="/" className={styles.link}>
            <span className={styles.linkIcon}>💻</span>
            <span>{language === "uk" ? "Вибір технологій" : "Tech stack"}</span>
          </Link>
          <button
            className={styles.link}
            onClick={(e) =>
              handleExternalLink(e, "https://github.com/Igoryakib/ForecastPet")
            }
          >
            <img
              className={`${styles.linkIcon} ${styles.githubIcon}`}
              src={GithubIcon}
              alt="github icon"
            />
            <span>Github</span>
          </button>
        </ul>
        <p className={styles.version}>v. 1.0.0</p>
      </div>
      <p className={styles.copyright}>
        Copyright © {year} Forecast Fox. All rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
