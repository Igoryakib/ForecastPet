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
  getCities,
} from "../../redux/action-operations";

// language selector
import {
  getGeo,
  getLanguage,
  getUnit,
  getWeather,
} from "../../redux/selectors";

const TEMPRORARY_NAME_UK = "Антон";
const TEMPRORARY_NAME_EN = "Anton";

const Header = () => {
  const [temperature, setTemperature] = useState(false);
  const [lang, setLang] = useState("uk");
  const [searchValue, setSearchValue] = useState("");
  const [cords, setCords] = useState("");
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const unit = useSelector(getUnit);
  const weatherData = useSelector(getWeather);

  useEffect(() => {
    setCords({
      lat: weatherData?.geoDetails?.geoData?.lat,
      lon: weatherData?.geoDetails?.geoData?.lon,
    });
  }, [weatherData]);

  const onChangeUnit = (event) => {
    const isChecked = event.target.checked;
    setTemperature(isChecked);
    dispatch(temperatureUnit(isChecked ? "F" : "C"));
  };
  useEffect(() => {
    if (searchValue)
      dispatch(getCities({ regionData: searchValue, lang: lang }));
  }, [searchValue, lang, dispatch]);
  const dispatchFn = (data) => {
      dispatch(getGeoDetails(data));
      dispatch(weatherRegion(searchValue));
      dispatch(getDailyWeather(data));
      dispatch(getHourlyWeather(data));
      dispatch(getCurrentlyWeather(data));
      dispatch(getAirQuality(data));
      setSearchValue("");
  }
  const onSubmitFn = (event) => {
    event.preventDefault();
    const data = {
      regionData: searchValue,
      lang: language,
    };
    if (searchValue) {
      dispatchFn(data);
    }
  };
  useEffect(() => {
    if (lang === "uk") {
      dispatch(weatherLanguage("uk"));
    } else {
      dispatch(weatherLanguage("en"));
    }
  }, [lang, dispatch]);
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
        lat: cords.lat,
        lon: cords.lon,
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
  const titleLang = {
    title: language === "uk" ? "оновити" : "reload",
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
        {weatherData && (
          <button
            title={titleLang.title}
            onClick={reloadWeather}
            className={styles.reloaderButton}
          >
            <img
              className={styles.reloaderButtonIcon}
              src={Reloader}
              alt="icon"
            />
          </button>
        )}
        <SearchForm
          onSubmit={onSubmitFn}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          dispatchFn={dispatchFn}
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
