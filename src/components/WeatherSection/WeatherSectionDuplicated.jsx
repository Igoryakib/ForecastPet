import React from "react";
import styles from './WeatherSection.module.scss';

const WeatherSectionDuplicated = () => {
    return (
      <section className={styles.weatherSection}>
        <div className={styles.weatherInfo}></div>
      </section>
    );
};

export default WeatherSectionDuplicated;