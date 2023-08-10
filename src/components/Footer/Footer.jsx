import React from "react";
import styles from "./Footer.module.scss";
import { useSelector } from "react-redux";
import { getLanguage } from "../../redux/selectors";

const Footer = () => {
  const language = useSelector(getLanguage);
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
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
      </div>
    </footer>
  );
};

export default Footer;
