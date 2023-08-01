import styles from "./ForecastTomorrow.module.scss";

import cloudyIcon from "../../../static/tomorrow/cloudy.svg";
import rainyIcon from "../../../static/tomorrow/rainy.svg";
import sunnyIcon from "../../../static/tomorrow/sunny.svg";
import snowyIcon from "../../../static/tomorrow/snowy.svg";

const ForecastTomorrow = function ({
  temp = 17,
  description = "Сильний дощ",
  icon = "rainy",
}) {
  return (
    <section className={styles.section}>
      <img
        src={
          icon === "rainy"
            ? rainyIcon
            : icon === "sunny"
            ? sunnyIcon
            : icon === "snowy"
            ? snowyIcon
            : icon === "cloudy"
            ? cloudyIcon
            : ""
        }
        alt="weather background"
        className={styles.icon}
      />
      <h3 className={styles.heading}>Завтра</h3>
      <p className={styles.temp}>
        {temp === 0 ? "0" : temp > 0 ? `+${temp}°` : `-${temp}`}
      </p>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default ForecastTomorrow;
