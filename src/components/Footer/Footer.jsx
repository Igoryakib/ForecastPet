import React from "react";
import styles from "./Footer.module.scss";

import { getWeatherData } from "../../utils/fetchApi.js";

const Footer = () => {
    const fn = async () => {
      const day = await getWeatherData("Львів", "daily", "uk");
      const hour = await getWeatherData("Львів", "currently", "uk");
      const current = await getWeatherData("Київ", "hourly", "uk");
      console.log('day', day);
      console.log('hour', hour);
      console.log('current', current);
    };
  return (
    <footer onClick={fn} className={styles.footer}>
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
