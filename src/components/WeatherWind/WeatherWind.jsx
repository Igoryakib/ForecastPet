import React from "react";
import styles from "./WeatherWind.module.scss";
import Wind from "../../static/Wind.svg";
import classNames from "classnames";

const WeatherWind = ({ AQiIndex }) => {
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
  return (
    <section className={styles.weatherWindSection}>
      <div className={styles.weatherWindContent}>
        <img src={Wind} alt="icon" />
        <div>
          <h3 className={styles.weatherWindTitle}>Якість повітря</h3>
          <div className={styles.weatherAqiComponents}>
            <div className={styles.weatherAQIWrapper}>
              <span className={styles.weatherAQIIndex}>{AQiIndex}</span>
              <div className={activeClassnamesAQi(AQiIndex)}>
                <span className={styles.weatherAQIIcon}>aqi</span>
              </div>
            </div>
            <div className={styles.AqiSlider}>
              <span
                style={{ left: `${AQiIndex > 95 ? 95 : AQiIndex}px` }}
                className={styles.sliderStick}
              ></span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default WeatherWind;
