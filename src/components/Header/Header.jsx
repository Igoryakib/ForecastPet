import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import styles from "./Header.module.scss";

// svg
import Avatar1 from "../../static/avatars/avatar_1.svg";
import Avatar2 from "../../static/avatars/avatar_2.svg";
import Avatar3 from "../../static/avatars/avatar_3.svg";
import Avatar4 from "../../static/avatars/avatar_4.svg";
import Avatar5 from "../../static/avatars/avatar_5.svg";
import Avatar6 from "../../static/avatars/avatar_6.svg";
import Avatar7 from "../../static/avatars/avatar_7.svg";
import Avatar8 from "../../static/avatars/avatar_8.svg";
import Avatar9 from "../../static/avatars/avatar_9.svg";
import Avatar10 from "../../static/avatars/avatar_10.svg";
import Avatar11 from "../../static/avatars/avatar_11.svg";
import Avatar12 from "../../static/avatars/avatar_12.svg";
import Avatar13 from "../../static/avatars/avatar_13.svg";
import Avatar14 from "../../static/avatars/avatar_14.svg";
import Avatar15 from "../../static/avatars/avatar_15.svg";
import Avatar16 from "../../static/avatars/avatar_16.svg";
import Avatar17 from "../../static/avatars/avatar_17.svg";
import Avatar18 from "../../static/avatars/avatar_18.svg";
import Avatar19 from "../../static/avatars/avatar_19.svg";
import Avatar20 from "../../static/avatars/avatar_20.svg";
import Avatar21 from "../../static/avatars/avatar_21.svg";
import Avatar22 from "../../static/avatars/avatar_22.svg";
import Avatar23 from "../../static/avatars/avatar_23.svg";
import Avatar24 from "../../static/avatars/avatar_24.svg";
import Avatar25 from "../../static/avatars/avatar_25.svg";
import Avatar26 from "../../static/avatars/avatar_26.svg";
import Avatar27 from "../../static/avatars/avatar_27.svg";
import Avatar28 from "../../static/avatars/avatar_28.svg";
import Avatar29 from "../../static/avatars/avatar_29.svg";
import Avatar30 from "../../static/avatars/avatar_30.svg";
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
  getUser,
} from "../../redux/action-operations";

// language selector
import {
  getGeo,
  getIsUserLoading,
  getLanguage,
  getUnit,
  getUserData,
  getWeather,
} from "../../redux/selectors";
import { Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CtaButton from "../small components/CtaButton/CtaButton";

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
  const navigate = useNavigate();

  //////////////////////////////////////////////////////////////////////////////
  // GET USER FUNCTIONALITY
  // GET USER FUNCTIONALITY
  // GET USER FUNCTIONALITY
  //////////////////////////////////////////////////////////////////////////////

  // const [isLoadingUser, setIsLoadingUser] = useState(true);

  const userData = useSelector(getUserData);
  const isLoadingUser = useSelector(getIsUserLoading);

  //////////////////////////////////////////////////////////////////////////////
  // GET USER FUNCTIONALITY
  // GET USER FUNCTIONALITY
  // GET USER FUNCTIONALITY
  //////////////////////////////////////////////////////////////////////////////

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
  };
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
  let avatar = Avatar1;
  switch (userData?.id_avatar) {
    case 2:
      avatar = Avatar2;
      break;
    case 3:
      avatar = Avatar3;
      break;
    case 4:
      avatar = Avatar4;
      break;
    case 5:
      avatar = Avatar5;
      break;
    case 6:
      avatar = Avatar6;
      break;
    case 7:
      avatar = Avatar7;
      break;
    case 8:
      avatar = Avatar8;
      break;
    case 9:
      avatar = Avatar9;
      break;
    case 10:
      avatar = Avatar10;
      break;
    case 11:
      avatar = Avatar11;
      break;
    case 12:
      avatar = Avatar12;
      break;
    case 13:
      avatar = Avatar13;
      break;
    case 14:
      avatar = Avatar14;
      break;
    case 15:
      avatar = Avatar15;
      break;
    case 16:
      avatar = Avatar16;
      break;
    case 17:
      avatar = Avatar17;
      break;
    case 18:
      avatar = Avatar18;
      break;
    case 19:
      avatar = Avatar19;
      break;
    case 20:
      avatar = Avatar20;
      break;
    case 21:
      avatar = Avatar21;
      break;
    case 22:
      avatar = Avatar22;
      break;
    case 23:
      avatar = Avatar23;
      break;
    case 24:
      avatar = Avatar24;
      break;
    case 25:
      avatar = Avatar25;
      break;
    case 26:
      avatar = Avatar26;
      break;
    case 27:
      avatar = Avatar27;
      break;
    case 28:
      avatar = Avatar28;
      break;
    case 29:
      avatar = Avatar29;
      break;
    case 30:
      avatar = Avatar30;
      break;
    default:
      avatar = Avatar1;
  }
  return (
    <header className={styles.header}>
      {/* ////////////////////////////////////////// */}
      {/* conditional profile data. Depends on if user's logged in  */}
      {/* ////////////////////////////////////////// */}

      {isLoadingUser ? (
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: "1.8rem", backgroundColor: "#e9e9e9" }}
          animation="pulse"
        >
          <div className={styles.profile}>
            <div className={styles.profileAvatar}>
              <img className={styles.avatar} src={Avatar1} alt="avatar" />
              <img className={styles.ellipse} src={Ellipse} alt="ellipse" />
            </div>
            <div className={styles.profileText}>
              <h3 className={styles.subtitle}>
                {language === "uk"
                  ? `Привіт, ${userData?.first_name}`
                  : `Hello, ${userData?.first_name}`}
              </h3>
              <h2 className={styles.title}>{day.split("р.")[0]}</h2>
            </div>
          </div>
        </Skeleton>
      ) : userData ? (
        <div className={styles.profile}>
          <div className={styles.profileAvatar}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <img className={styles.ellipse} src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.profileText}>
            <h3 className={styles.subtitle}>
              {language === "uk"
                ? `Привіт, ${userData?.first_name}`
                : `Hello, ${userData?.first_name}`}
            </h3>
            <h2 className={styles.title}>{day.split("р.")[0]}</h2>
          </div>
        </div>
      ) : (
        <div className={styles.loginHeaderContainer}>
          <CtaButton
            onClick={(e) => {
              e.preventDefault();
              navigate("/auth/login");
            }}
            type="header"
          >
            Log in
          </CtaButton>
          <h2 className={styles.title}>{day.split("р.")[0]}</h2>
        </div>
      )}

      {/* ////////////////////////////////////////// */}
      {/* conditional profile data. Depends on if user's logged in ⬆️  */}
      {/* ////////////////////////////////////////// */}

      {/* <div className={styles.profile}>
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
      </div> */}
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
