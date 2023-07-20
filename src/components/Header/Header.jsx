import React, { useState } from "react";
import styles from "./Header.module.scss";
import classnames from "classnames";
import Avatar from "../../static/avatar_26.svg";
import Ellipse from "../../static/ellipse.svg";
import TemperatureSwitcher from "../TemperatureSwitcher/TemperatureSwitcher";

const Header = () => {
  const [temperature, setTemperature] = useState(false);
  const [lang, setLang] = useState('uk');
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.profileAvatar}>
          <img className={styles.avatar} src={Avatar} alt="avatar" />
          <img className={styles.ellipse} src={Ellipse} alt="ellipse" />
        </div>
        <div className={styles.profileText}>
          <h3 className={styles.subtitle}>Привіт Антон</h3>
          <h2 className={styles.title}>Понеділок, 7 липня, 2023</h2>
        </div>
      </div>
      <div className={styles.headerControls}>
        <label className={styles.changeLangContainer}>
          <select onChange={(event) => setLang(event.target.value)} className={classnames(styles.selectLang, styles.selectOption)}>
            <option className={styles.selectOption} value="uk">
              укр
            </option>
            <option className={styles.selectOption} value="en">
              eng
            </option>
          </select>
        </label>
        <TemperatureSwitcher value={temperature} setValue={setTemperature} />
      </div>
    </header>
  );
};

export default Header;
