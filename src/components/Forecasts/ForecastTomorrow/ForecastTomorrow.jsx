import styles from "./ForecastTomorrow.module.scss";

import cloudyIcon from "../../../static/tomorrow/cloudy.svg";
import rainyIcon from "../../../static/tomorrow/rainy.svg";
import sunnyIcon from "../../../static/tomorrow/sunny.svg";
import snowyIcon from "../../../static/tomorrow/snowy.svg";
import { useSelector } from "react-redux";
import { getLanguage } from "../../../redux/selectors";

const ForecastTomorrow = function ({
  temp = 17,
  description_UK = "Сильний дощ",
  description_EN = "Heavy rain",
  icon = "rainy",
}) {
  const language = useSelector(getLanguage);
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
      <h3 className={styles.heading}>
        {language === "uk" ? "Завтра" : "Tomorrow"}
      </h3>
      <p className={styles.temp}>
        {temp === 0 ? "0" : temp > 0 ? `+${temp}°` : `-${temp}`}
      </p>
      <p className={styles.description}>
        {language === "uk" ? description_UK : description_EN}
      </p>
    </section>
  );
};

export default ForecastTomorrow;
