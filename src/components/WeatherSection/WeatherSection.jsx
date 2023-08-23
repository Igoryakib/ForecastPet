import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classnames from "classnames";

import styles from "./WeatherSection.module.scss";
import WeatherCard from "../WeatherCard/WeatherCard";
import {
  getGeo,
  getLanguage,
  getUnit,
  getWeather,
} from "../../redux/selectors";
import { convertUnitFn } from "../../utils/convertUnitFn";

import cloudyIcon from "../../static/currentIcon/cloudy.svg";
import partlyCloudyIcon from "../../static/currentIcon/partlyCloudy.svg";
import rainyIcon from "../../static/currentIcon/rainy.svg";
import snowyIcon from "../../static/currentIcon/snowy.svg";
import sunnyIcon from "../../static/currentIcon/sunny.svg";

const WeatherSection = () => {
  const language = useSelector(getLanguage);
  const weatherData = useSelector(getWeather);
  const geo = useSelector(getGeo);
  const unit = useSelector(getUnit);
  const hasNecessaryLocalname = useRef();

  const currentTemp = Math.round(weatherData.currentlyWeather.main.temp);
  useEffect(() => {
    try {
      hasNecessaryLocalname.current = geo.geoData.local_names[language]
        ? true
        : false;
    } catch (error) {
      console.error(error);
    }
  }, [geo.geoData.local_names, language]);

  const weatherIconFn = function () {
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("01"))
      return sunnyIcon;
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("02"))
      return partlyCloudyIcon;
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("03"))
      return cloudyIcon;
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("04"))
      return cloudyIcon;
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("09"))
      return rainyIcon;
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("10"))
      return rainyIcon;
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("11"))
      return rainyIcon;
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("13"))
      return snowyIcon;
    if (weatherData.currentlyWeather.weather[0].icon.startsWith("50"))
      return cloudyIcon;
  };
  useEffect(() => {
    const mouseWheel = document.querySelector(`.${styles.timeWeather}`);

    mouseWheel.addEventListener("wheel", function (e) {
      const race = 6; // How many pixels to scroll

      if (e.deltaY > 0)
        // Scroll right
        mouseWheel.scrollLeft += race;
      // Scroll left
      else mouseWheel.scrollLeft -= race;
      e.preventDefault();
    });
  }, []);

  return (
    <section className={styles.weatherSection}>
      <div className={styles.weatherInfo}>
        <div className={styles.weatherCountry}>
          <img src={weatherIconFn()} alt="icon" />
          <div className={classnames(styles.weatherInfoText, styles.textAlign)}>
            <h3 className={styles.weatherInfoTitle}>
              {language === "en"
                ? geo.geoData.name
                : hasNecessaryLocalname?.current
                ? geo.geoData.local_names[language]
                : geo.geoData.name}
            </h3>
            <span
              className={classnames(
                styles.weatherInfoSubtitle,
                styles.textPadding
              )}
            >
              {language === "en"
                ? geo.countryData.name_ENG
                : geo.countryData.name_NATIVE
                ? geo.countryData.name_NATIVE
                : geo.countryData.name_ENG}
            </span>
          </div>
        </div>
        <div className={styles.weatherInfoText}>
          <h3 className={classnames(styles.weatherInfoTitle, styles.textSize)}>
            {unit === "C"
              ? `${
                  currentTemp === 0
                    ? 0
                    : currentTemp > 0
                    ? currentTemp
                    : "-" + currentTemp
                } C`
              : `${
                  currentTemp === 0
                    ? 0
                    : currentTemp > 0
                    ? Math.round(convertUnitFn(currentTemp))
                    : "-" + Math.round(convertUnitFn(currentTemp))
                } F`}
            °
          </h3>
          <span className={styles.weatherInfoSubtitle}>
            {language === "uk" ? "Температура" : "Temperature"}
          </span>
        </div>
        <div className={styles.weatherInfoText}>
          <h3 className={classnames(styles.weatherInfoTitle, styles.textSize)}>
            {weatherData.currentlyWeather.main.humidity}%
          </h3>
          <span className={styles.weatherInfoSubtitle}>
            {language === "uk" ? "Вологість" : "Humidity"}
          </span>
        </div>
        <div className={styles.weatherInfoText}>
          <h3 className={classnames(styles.weatherInfoTitle, styles.textSize)}>
            {weatherData.currentlyWeather.wind.speed.toFixed(1)}
            <span>{language === "uk" ? "м/сек" : "m/sec"}</span>
          </h3>
          <span className={styles.weatherInfoSubtitle}>
            {language === "uk" ? "Швидк.вітру" : "Wind speed"}
          </span>
        </div>
      </div>
      <div className={styles.timeWeather}>
        {weatherData.hourlyWeather.list.slice(0, 23).map((hour) => (
          <WeatherCard
            key={hour.dt}
            temp={
              unit === "C"
                ? hour.main.temp === 0
                  ? 0
                  : hour.main.temp > 0
                  ? "+" + Math.round(hour.main.temp)
                  : "-" + Math.round(hour.main.temp)
                : Math.round(convertUnitFn(hour.main.temp)) > 0
                ? "+" + Math.round(convertUnitFn(hour.main.temp))
                : Math.round(convertUnitFn(hour.main.temp)) === 0
                ? 0
                : "-" + Math.round(convertUnitFn(hour.main.temp))
            }
            time={hour["dt_txt"].split(" ")[1].split(":")[0]}
            icon={hour.weather[0].icon}
          />
        ))}
      </div>
    </section>
  );
};

export default WeatherSection;
