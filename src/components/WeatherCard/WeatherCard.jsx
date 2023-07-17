import React from "react";
import styles from './WeatherCard.module.scss';
import classnames from 'classnames';
import cardIcon from '../../static/cardIcon.svg';

const WeatherCard = () => {
    return (
      <div className={styles.card}>
        <h4 className={styles.cardText}>10:00</h4>
        <img className={styles.cardImg} src={cardIcon} alt="icon" />
        <h4 className={classnames(styles.cardText, styles.cardTemperature)}>28°</h4>
      </div>
    );
};

export default WeatherCard;