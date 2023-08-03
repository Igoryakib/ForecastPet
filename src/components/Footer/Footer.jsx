import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <h4 className={styles.footerTitle}>
          Copyright © 2023. Створено двома молодими геніями для портфоліо. Не
          використовувати для комерційних цілей
        </h4>
        <h4 className={styles.footerTitle}>Вебдодаток “Прогноз погоди”</h4>
      </div>
    </footer>
  );
};

export default Footer;
