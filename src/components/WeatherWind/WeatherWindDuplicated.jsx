import React from 'react';
import styles from './WeatherWind.module.scss';

const WeatherSectionDuplicated = () => {
    return (
      <section className={styles.weatherWindSection}>
        <div className={styles.weatherWindContent}></div>
      </section>
    );
};

export default WeatherSectionDuplicated;