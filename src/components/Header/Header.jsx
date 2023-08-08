import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./Header.module.scss";

// svg 
import Avatar from "../../static/avatar_26.svg";
import Ellipse from "../../static/ellipse.svg";

// components 
import Switcher from "../Switcher/Switcher";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import SearchForm from "../SearchForm/SearchForm";

// redux 
import { weatherRegion } from "../../redux/actions";
import { getDailyWeather, getHourlyWeather, getCurrentlyWeather } from "../../redux/action-operations";

const Header = () => {
  const [temperature, setTemperature] = useState(false);
  const [lang, setLang] = useState("укр");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const onSubmitFn = (event) => {
    event.preventDefault();
    let langData = lang;
    if (langData === 'укр') {
      langData = 'uk';
    } else {
      langData = 'en';
    }
    const data = {
      regionData: searchValue,
      lang: langData,
    };
    dispatch(weatherRegion(searchValue));
    dispatch(getDailyWeather(data));
    dispatch(getHourlyWeather(data));
    dispatch(getCurrentlyWeather(data));
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
        <div className={styles.langSwitcherContainer}>
          <LangSwitcher setLang={setLang} />
        </div>
        <Switcher value={temperature} setValue={setTemperature} />
      </div>
    </header>
  );
};

export default Header;
