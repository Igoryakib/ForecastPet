import React from "react";
import styles from './WeatherSection.module.scss';
import { Skeleton } from "@mui/material";


const WeatherSectionSkeleton = () => {
    return (
      <Skeleton
        variant="rounded"
        sx={{ borderRadius: "5.4rem", backgroundColor: "#e9e9e9" }}
        animation="pulse"
      >
        <section className={styles.weatherSection}>
          <div className={styles.weatherInfo}></div>
        </section>
      </Skeleton>
    );
};

export default WeatherSectionSkeleton;