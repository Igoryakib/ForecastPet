import React from "react";
import styles from "./WeatherWind.module.scss";
import { Skeleton } from "@mui/material";

const WeatherWindSkeleton = () => {
  return (
    <Skeleton
      variant="rounded"
      sx={{ borderRadius: "5.4rem", backgroundColor: "#e9e9e9" }}
      animation="pulse"
    >
      <section className={styles.weatherWindSection}>
        <div className={styles.weatherWindContent}></div>
      </section>
    </Skeleton>
  );
};

export default WeatherWindSkeleton;
