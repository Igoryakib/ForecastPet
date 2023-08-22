import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import styles from "./Header.module.scss";

// svg
import Avatar from "../../static/avatars/avatar_26.svg";
import Ellipse from "../../static/ellipse.svg";
import Reloader from "../../static/Reloader.svg";

// components
import Switcher from "../Switcher/Switcher";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import SearchForm from "../SearchForm/SearchForm";

// redux
import {
  weatherRegion,
  weatherLanguage,
  temperatureUnit,
  weatherLoading,
} from "../../redux/actions";
import {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
  getGeoDetails,
  getAirQuality,
} from "../../redux/action-operations";

// language selector
import {
  getLanguage,
  getLatRegion,
  getLonRegion,
  getUnit,
  getWeather,
} from "../../redux/selectors";

const TEMPRORARY_NAME_UK = "Антон";
const TEMPRORARY_NAME_EN = "Anton";

const Header = () => {
  const [temperature, setTemperature] = useState(false);
  const [lang, setLang] = useState("uk");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const unit = useSelector(getUnit);
  const lat = useSelector(getLatRegion);
  const lon = useSelector(getLonRegion);
  const weatherData = useSelector(getWeather);

  const onChangeUnit = (event) => {
    const isChecked = event.target.checked;
    setTemperature(isChecked);
    dispatch(temperatureUnit(isChecked ? "F" : "C"));
  };
  const onSubmitFn = (event) => {
    event.preventDefault();
    const data = {
      regionData: searchValue,
      lang: language,
    };
    dispatch(getGeoDetails(data));
    dispatch(weatherRegion(searchValue));
    dispatch(getDailyWeather(data));
    dispatch(getHourlyWeather(data));
    dispatch(getCurrentlyWeather(data));
    dispatch(getAirQuality(data));
    setSearchValue("");
  };
  useEffect(() => {
    if (lang === "uk") {
      dispatch(weatherLanguage("uk"));
    } else {
      dispatch(weatherLanguage("en"));
    }
  }, [language, lang, dispatch]);
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const day = Intl.DateTimeFormat(language, options).format(new Date());

  const reloadWeather = () => {
    const data = {
      lang: language,
      regionData: {
        lat: lat,
        lon: lon,
      },
    };
    dispatch(weatherLoading(true));
    dispatch(weatherLoading(true));
    dispatch(getDailyWeather(data));
    dispatch(getHourlyWeather(data));
    dispatch(getAirQuality(data));
    dispatch(getCurrentlyWeather(data));
    dispatch(getGeoDetails(data));
    dispatch(temperatureUnit(unit));
  };
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
        
          <button onClick={reloadWeather} className={classnames(styles.reloaderButton, weatherData && styles.visibleBtn)}>
            <img
              className={styles.reloaderButtonIcon}
              src={Reloader}
              alt="icon"
            />
          </button>
        <SearchForm
          onSubmit={onSubmitFn}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className={styles.langSwitcherContainer}>
          <LangSwitcher setLang={setLang} />
        </div>
        <Switcher value={temperature} setValue={onChangeUnit} />
      </div>
    </header>
  );
};

export default Header;
