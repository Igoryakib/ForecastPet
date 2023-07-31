import React from "react";
import styles from "./WeatherWind.module.scss";
import Wind from "../../static/Wind.svg";
import classNames from "classnames";
import { useEffect } from "react";

const WeatherWind = ({ AQiIndex, levelCo, levelO3 }) => {
  const activeClassnamesAQi = (AQiIndex) =>
    classNames(styles.weatherAQIIndicator, {
      [styles.aqi_color100]: AQiIndex >= 0 && AQiIndex <= 20,
      [styles.aqi_color90]: AQiIndex > 20 && AQiIndex <= 35,
      [styles.aqi_color70]: AQiIndex > 35 && AQiIndex <= 50,
      [styles.aqi_color50]: AQiIndex >= 51 && AQiIndex <= 100,
      [styles.aqi_color40]: AQiIndex >= 101 && AQiIndex <= 150,
      [styles.aqi_color20]: AQiIndex >= 151 && AQiIndex <= 200,
      [styles.aqi_color10]: AQiIndex >= 201,
    });
  const activeClassnamesO3 = (levelO3) =>
    classNames(styles.levelCo, {
      [styles.aqi_color100]: levelO3 >= 0 && levelO3 <= 20,
      [styles.aqi_color90]: levelO3 > 20 && levelO3 <= 35,
      [styles.aqi_color70]: levelO3 > 35 && levelO3 <= 50,
      [styles.aqi_color50]: levelO3 >= 51 && levelO3 <= 100,
      [styles.aqi_color40]: levelO3 >= 101 && levelO3 <= 150,
      [styles.aqi_color20]: levelO3 >= 151 && levelO3 <= 200,
      [styles.aqi_color10]: levelO3 >= 201,
    });
  const activeClassnamesCO = (levelCo) =>
    classNames(styles.levelCo, {
      [styles.aqi_color100]: levelCo >= 0 && levelCo <= 9,
      [styles.aqi_color90]: levelCo > 10 && levelCo <= 29,
      [styles.aqi_color50]: levelCo > 30 && levelCo <= 35,
      [styles.aqi_color20]: levelCo >= 36 && levelCo <= 99,
      [styles.aqi_color10]: levelCo >= 100,
    });
  const activeClassnamesSliderAQi = (AQiIndex) =>
    classNames(styles.sliderStick, {
      [styles.aqi_slider100]: AQiIndex >= 0 && AQiIndex <= 20,
      [styles.aqi_slider90]: AQiIndex > 20 && AQiIndex <= 35,
      [styles.aqi_slider70]: AQiIndex > 35 && AQiIndex <= 50,
      [styles.aqi_slider50]: AQiIndex >= 51 && AQiIndex <= 100,
      [styles.aqi_slider40]: AQiIndex >= 101 && AQiIndex <= 150,
      [styles.aqi_slider20]: AQiIndex >= 151 && AQiIndex <= 200,
      [styles.aqi_slider10]: AQiIndex >= 201,
    });
  return (
    <section className={styles.weatherWindSection}>
      <div className={styles.weatherWindContent}>
        <div className={styles.weatherWindHeading}>
          <img src={Wind} alt="icon" />
          <div className={styles.aqiContent}>
            <h3 className={styles.weatherWindTitle}>Якість повітря</h3>
            <div className={styles.weatherAqiComponents}>
              <div className={styles.weatherAQIWrapper}>
                <span className={styles.weatherAQIIndex}>{AQiIndex}</span>
                <div className={activeClassnamesAQi(AQiIndex)}>
                  <span className={styles.weatherAQIIcon}>aqi</span>
                </div>
              </div>
              <div className={styles.AqiSlider}>
                <span className={activeClassnamesSliderAQi(AQiIndex)}></span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.levelO3Indicator}>
          <span className={styles.weatherAQIIndex}>
            {levelCo}
            <span>мг/м³</span>
          </span>
          <div className={activeClassnamesCO(levelCo)}>
            <span className={styles.weatherAQIIcon}>co</span>
          </div>
        </div>
        <div className={styles.levelO3Indicator}>
          <span className={styles.weatherAQIIndex}>
            {levelO3}
            <span>мг/м³</span>
          </span>
          <div className={activeClassnamesO3(levelO3)}>
            <span className={styles.weatherAQIIcon}>o3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWind;
