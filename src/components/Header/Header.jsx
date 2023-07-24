import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Avatar from "../../static/avatar_26.svg";
import Ellipse from "../../static/ellipse.svg";
import Switcher from "../Switcher/Switcher";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import SearchForm from "../SearchForm/SearchForm";

const Header = () => {
  const [temperature, setTemperature] = useState(false);
  const [lang, setLang] = useState("укр");
  const [searchValue, setSearchValue] = useState('');
  const onSubmitFn = (event) => {
    event.preventDefault();
    const data = {
      value: searchValue
    };
    console.log(data)
  };
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
        <SearchForm
          onSubmit={onSubmitFn}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <LangSwitcher setLang={setLang} />
        <Switcher value={temperature} setValue={setTemperature} />
      </div>
    </header>
  );
};

export default Header;
