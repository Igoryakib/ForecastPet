import React, { useEffect, useRef } from "react";
import styles from "./WeatherWind.module.scss";
import Wind from "../../static/Wind.svg";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { getAir, getLanguage } from "../../redux/selectors";

import background12 from "../../static/windBackground/1-2.svg";
import background3 from "../../static/windBackground/3.svg";
import background45 from "../../static/windBackground/4-5.svg";

const WeatherWind = () => {
  const language = useSelector(getLanguage);
  const airQualityData = useSelector(getAir);
  const { o3: levelO3, co: levelCo } = airQualityData?.list[0]?.components;
  const AQIIndex = airQualityData?.list[0]?.main?.aqi;

  // selectors for color change
  const texts = useRef([]);

  useEffect(() => {
    texts.current.map((text) => {
      if (AQIIndex <= 2) text.style.color = "#333";
      else if (AQIIndex === 3) text.style.color = "#fff";
      else if (AQIIndex >= 4) text.style.color = "#fff";
    });
  }, []);

  const activeClassnamesAQi = (AQIIndex) =>
    classNames(styles.weatherAQIIndicator, {
      [styles.aqi_color100]: AQIIndex === 1,
      [styles.aqi_color70]: AQIIndex === 2,
      [styles.aqi_color50]: AQIIndex === 3,
      [styles.aqi_color30]: AQIIndex === 4,
      [styles.aqi_color10]: AQIIndex === 5,
    });
  const activeClassnamesO3 = (levelO3) =>
    classNames(styles.levelCo, {
      [styles.aqi_color100]: levelO3 >= 0 && levelO3 <= 30,
      [styles.aqi_color90]: levelO3 > 30 && levelO3 <= 60,
      [styles.aqi_color70]: levelO3 > 60 && levelO3 <= 100,
      [styles.aqi_color50]: levelO3 > 100 && levelO3 <= 130,
      [styles.aqi_color40]: levelO3 > 130 && levelO3 <= 160,
      [styles.aqi_color20]: levelO3 > 160 && levelO3 <= 190,
      [styles.aqi_color10]: levelO3 > 190,
    });
  const activeClassnamesCO = (levelCo) =>
    classNames(styles.levelCo, {
      [styles.aqi_color100]: levelCo >= 0 && levelCo <= 4400,
      [styles.aqi_color90]: levelCo > 4400 && levelCo <= 9400,
      [styles.aqi_color50]: levelCo > 9400 && levelCo <= 12400,
      [styles.aqi_color20]: levelCo > 12400 && levelCo <= 15400,
      [styles.aqi_color10]: levelCo > 15400,
    });
  const activeClassnamesSliderAQi = (AQIIndex) =>
    classNames(styles.sliderStick, {
      [styles.aqi_slider100]: AQIIndex === 1,
      [styles.aqi_slider70]: AQIIndex === 2,
      [styles.aqi_slider50]: AQIIndex === 3,
      [styles.aqi_slider30]: AQIIndex === 4,
      [styles.aqi_slider10]: AQIIndex === 5,
    });
  return (
    <section className={styles.weatherWindSection}>
      <img
        src={
          AQIIndex <= 2
            ? background12
            : AQIIndex === 3
              ? background3
              : background45
        }
        className={styles.background}
        alt="air condition"
      />
      <div className={styles.weatherWindContent}>
        <div className={styles.weatherWindHeading}>
          <img src={Wind} alt="icon" />
          <div className={styles.aqiContent}>
            <h3
              className={styles.weatherWindTitle}
              ref={(el) => texts.current.push(el)}
            >
              {language === "uk" ? "Якість повітря" : "Air Quality"}
            </h3>
            <div className={styles.weatherAqiComponents}>
              <div className={styles.weatherAQIWrapper}>
                <span
                  className={styles.weatherAQIIndex}
                  ref={(el) => texts.current.push(el)}
                >
                  {AQIIndex}
                </span>
                <div className={activeClassnamesAQi(AQIIndex)}>
                  <span className={styles.weatherAQIIcon}>aqi</span>
                </div>
              </div>
              <div className={styles.AqiSlider}>
                <span className={activeClassnamesSliderAQi(AQIIndex)}></span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.levelO3Indicator}>
          <span
            className={styles.weatherAQIIndex}
            ref={(el) => texts.current.push(el)}
          >
            {Math.round(levelCo)}
            <span ref={(el) => texts.current.push(el)}>
              {language === "uk" ? "мг/м³" : "μg/m3"}
            </span>
          </span>
          <div className={activeClassnamesCO(levelCo)}>
            <span className={styles.weatherAQIIcon}>co</span>
          </div>
        </div>
        <div className={styles.levelO3Indicator}>
          <span
            className={styles.weatherAQIIndex}
            ref={(el) => texts.current.push(el)}
          >
            {Math.round(levelO3)}
            <span ref={(el) => texts.current.push(el)}>
              {language === "uk" ? "мг/м³" : "μg/m3"}
            </span>
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
