import React, { useEffect } from "react";
import styles from "./WeatherSection.module.scss";
import classnames from "classnames";
import partlyCloudly from "../../static/partlyCloudly.svg";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useSelector } from "react-redux";
import { getLanguage } from "../../redux/selectors";

const WeatherSection = () => {
  const language = useSelector(getLanguage);

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
          <img src={partlyCloudly} alt="icon" />
          <div className={classnames(styles.weatherInfoText, styles.textAlign)}>
            <h3 className={styles.weatherInfoTitle}>Полтава</h3>
            <span
              className={classnames(
                styles.weatherInfoSubtitle,
                styles.textPadding
              )}
            >
              Україна
            </span>
          </div>
        </div>
        <div className={styles.weatherInfoText}>
          <h3 className={classnames(styles.weatherInfoTitle, styles.textSize)}>
            +23°
          </h3>
          <span className={styles.weatherInfoSubtitle}>
            {language === "uk" ? "Температура" : "Temperature"}
          </span>
        </div>
        <div className={styles.weatherInfoText}>
          <h3 className={classnames(styles.weatherInfoTitle, styles.textSize)}>
            31%
          </h3>
          <span className={styles.weatherInfoSubtitle}>
            {language === "uk" ? "Вологість" : "Humidity"}
          </span>
        </div>
        <div className={styles.weatherInfoText}>
          <h3 className={classnames(styles.weatherInfoTitle, styles.textSize)}>
            14<span>{language === "uk" ? "км/год" : "km/h"}</span>
          </h3>
          <span className={styles.weatherInfoSubtitle}>
            {language === "uk" ? "Швидк.вітру" : "Wind speed"}
          </span>
        </div>
      </div>
      <div className={styles.timeWeather}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </section>
  );
};

export default WeatherSection;
