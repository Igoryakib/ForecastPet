import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.module.scss";

// svg
import Avatar from "../../static/avatar_26.svg";
import Ellipse from "../../static/ellipse.svg";

// components
import Switcher from "../Switcher/Switcher";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import SearchForm from "../SearchForm/SearchForm";

// redux
import { weatherRegion, weatherLanguage } from "../../redux/actions";
import {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
} from "../../redux/action-operations";
import { getLanguage } from "../../redux/selectors";

const Header = () => {
  const [temperature, setTemperature] = useState(false);
  const [lang, setLang] = useState("укр");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const onSubmitFn = (event) => {
    event.preventDefault();
    const data = {
      regionData: searchValue,
      lang: language,
    };
    dispatch(weatherRegion(searchValue));
    dispatch(getDailyWeather(data));
    dispatch(getHourlyWeather(data));
    dispatch(getCurrentlyWeather(data));
  };
  useEffect(() => {
    if (lang === "укр") {
      dispatch(weatherLanguage("uk"));
    } else {
      dispatch(weatherLanguage("en"));
    }
  }, [lang]);
  const options = {
    weekday: 'long',
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  
  const day = Intl.DateTimeFormat(language, options).format(new Date());
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.profileAvatar}>
          <img className={styles.avatar} src={Avatar} alt="avatar" />
          <img className={styles.ellipse} src={Ellipse} alt="ellipse" />
        </div>
        <div className={styles.profileText}>
          <h3 className={styles.subtitle}>Привіт Антон</h3>
          <h2 className={styles.title}>{day.split('р.')[0]}</h2>
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
