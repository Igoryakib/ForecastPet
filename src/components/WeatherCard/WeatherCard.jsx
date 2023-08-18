import React from "react";
import styles from "./WeatherCard.module.scss";
import classnames from "classnames";
import cardIcon from "../../static/cardIcons/cardIcon.svg";

const WeatherCard = ({ time, temp }) => {
  return (
    <div className={styles.card}>
      <h4 className={styles.cardText}>{time}:00</h4>
      <img className={styles.cardImg} src={cardIcon} alt="icon" />
      <h4 className={classnames(styles.cardText, styles.cardTemperature)}>
        {temp}°
      </h4>
    </div>
  );
};

export default WeatherCard;
