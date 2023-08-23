import React from "react";
import styles from "./WeatherCard.module.scss";
import classnames from "classnames";
import cardIcon from "../../static/cardIcons/cardIcon.svg";
import icon_cloudyRainy from "../../static/cardIcons/cardIcon__cloudy_rainy.svg";
import icon_cloudySnowy from "../../static/cardIcons/cardIcon__cloudy_snowy.svg";
import icon_cloudyStorm from "../../static/cardIcons/cardIcon__cloudy_storm.svg";
import icon_partlyCloudy from "../../static/cardIcons/cardIcon__day_partlycloudy.svg";
import icon_sunny from "../../static/cardIcons/cardIcon__sunny.svg";
import icon_snowy from "../../static/cardIcons/cardIcon__snowy.svg";
import icon_rainy from "../../static/cardIcons/cardIcon__rainy.svg";

const WeatherCard = ({ time = '00', temp = 0, icon = '01d' }) => {
  const weatherIconFn = function () {
    if (icon.startsWith("01"))
      return icon_sunny;
    if (icon.startsWith("02"))
      return icon_partlyCloudy;
    if (icon.startsWith("03"))
      return icon_partlyCloudy;
    if (icon.startsWith("04"))
      return icon_partlyCloudy;
    if (icon.startsWith("09"))
      return icon_cloudyRainy;
    if (icon.startsWith("10"))
      return icon_rainy;
    if (icon.startsWith("11"))
      return icon_cloudyStorm;
    if (icon.startsWith("13"))
      return icon_snowy;
    if (icon.startsWith("50"))
      return icon_partlyCloudy;
  };

  return (
    <div className={styles.card}>
      <h4 className={styles.cardText}>{time}:00</h4>
      <img className={styles.cardImg} src={weatherIconFn()} alt="icon" />
      <h4 className={classnames(styles.cardText, styles.cardTemperature)}>
        {temp}°
      </h4>
    </div>
  );
};

export default WeatherCard;
