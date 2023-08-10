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

// language selector
import { getLanguage, getWeather } from "../../redux/selectors";
import { store } from "../../redux/store";

const TEMPRORARY_NAME_UK = "Антон";
const TEMPRORARY_NAME_EN = "Anton";

const Header = () => {
  const [temperature, setTemperature] = useState(false);
  const [lang, setLang] = useState("uk");
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
    if (lang === "uk") {
      dispatch(weatherLanguage("uk"));
      localStorage.setItem("language", "uk");
    } else {
      dispatch(weatherLanguage("en"));
      localStorage.setItem("language", "en");
    }
  }, [language, lang, dispatch]);
  const options = {
    weekday: "long",
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
          <h3 className={styles.subtitle}>
            {language === "uk"
              ? `Привіт, ${TEMPRORARY_NAME_UK}`
              : `Hello, ${TEMPRORARY_NAME_EN}`}
          </h3>
          <h2 className={styles.title}>{day.split("р.")[0]}</h2>
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
