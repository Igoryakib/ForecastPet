import styles from "./ForecastTomorrow.module.scss";

import cloudyIcon from "../../../static/tomorrow/cloudy.svg";
import rainyIcon from "../../../static/tomorrow/rainy.svg";
import sunnyIcon from "../../../static/tomorrow/sunny.svg";
import snowyIcon from "../../../static/tomorrow/snowy.svg";
import { useSelector } from "react-redux";
import { getDaily, getLanguage, getUnit } from "../../../redux/selectors";
import { convertUnitFn } from "../../../utils/convertUnitFn";

const ForecastTomorrow = function () {

  // selectors
  const language = useSelector(getLanguage);
  const dailyWeather = useSelector(getDaily);
  const weatherToday = dailyWeather.list[1];
  const unit = useSelector(getUnit)

  // necessary weather data 
  const {icon, description} = weatherToday.weather[0];
  const temp = unit === 'C' ? Math.round(weatherToday.temp.day) : Math.round(convertUnitFn(weatherToday.temp.day));
  // console.log(weatherToday)
  
  // function to define current ico
  const weatherIconFn = function () {
    if (icon.startsWith("01"))
      return sunnyIcon;
    if (icon.startsWith("02"))
      return cloudyIcon;
    if (icon.startsWith("03"))
      return cloudyIcon;
    if (icon.startsWith("04"))
      return cloudyIcon;
    if (icon.startsWith("09"))
      return cloudyIcon;
    if (icon.startsWith("10"))
      return rainyIcon;
    if (icon.startsWith("11"))
      return rainyIcon;
    if (icon.startsWith("13"))
      return snowyIcon;
    if (icon.startsWith("50"))
      return cloudyIcon;
  };

  return (
    <section className={styles.section}>
      <img
        src={weatherIconFn()}
        alt="weather background"
        className={styles.icon}
      />
      <h3 className={styles.heading}>
        {language === "uk" ? "Завтра" : "Tomorrow"}
      </h3>
      <p className={styles.temp}>
        {temp === 0 ? "0°" : temp+'°'}
      </p>
      <p className={styles.description}>
        {/* {language === "uk" ? description_UK : description_EN} */}
        {`${description}`}
      </p>
    </section>
  );
};

export default ForecastTomorrow;
