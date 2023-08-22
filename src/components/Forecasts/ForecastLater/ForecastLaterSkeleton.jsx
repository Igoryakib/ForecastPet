import React from "react";
import styles from "./ForecastLater.module.scss";
import { Skeleton } from "@mui/material";

const ForecastLaterSkeleton = () => {
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

export default ForecastLaterSkeleton;
