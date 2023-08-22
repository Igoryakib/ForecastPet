import React from "react";
import styles from './ForecastTomorrow.module.scss';
import { Skeleton } from "@mui/material";

const ForecastTomorrowSkeleton = () => {
    return (
      <Skeleton
        variant="rounded"
        sx={{ borderRadius: "4rem", backgroundColor: "#e9e9e9" }}
        animation="pulse"
      >
        <section className={styles.section}>
          <div className={styles.sectionContent}></div>
        </section>
      </Skeleton>
    );
};

export default ForecastTomorrowSkeleton;