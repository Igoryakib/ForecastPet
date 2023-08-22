import styles from "./ForecastCard.module.scss";

import icon_cloudyRainy from "../../../static/cardIcons/cardIcon__cloudy_rainy.svg";
import icon_cloudySnowy from "../../../static/cardIcons/cardIcon__cloudy_snowy.svg";
import icon_cloudyStorm from "../../../static/cardIcons/cardIcon__cloudy_storm.svg";
import icon_partlyCloudy from "../../../static/cardIcons/cardIcon__day_partlycloudy.svg";
import icon_sunny from "../../../static/cardIcons/cardIcon__sunny.svg";
import icon_snowy from "../../../static/cardIcons/cardIcon__snowy.svg";
import icon_rainy from "../../../static/cardIcons/cardIcon__rainy.svg";

const ForecastCard = function ({
  tempMax = 30,
  tempMin = 20,
  icon = "01n",
  date = "2023-08-01",
  language = "uk",
}) {

  const weatherIconFn = function () {
    if (icon.startsWith("01"))
      return icon_sunny;
    if (icon.startsWith("02"))
      return icon_partlyCloudy;
    if (icon.startsWith("03"))
      return icon_partlyCloudy;
    if (icon.startsWith("04"))
      return icon_partlyCloudy;
    if (icon.startsWith("09"))
      return icon_cloudyRainy;
    if (icon.startsWith("10"))
      return icon_rainy;
    if (icon.startsWith("11"))
      return icon_cloudyStorm;
    if (icon.startsWith("13"))
      return icon_snowy;
    if (icon.startsWith("50"))
      return icon_partlyCloudy;
  };
  
  const options = {
    day: "numeric",
    month: "long",
  };
  const fullDateArray = new Intl.DateTimeFormat(language, options)
    .format(new Date(date))
    .split(" ");
  const day = fullDateArray.filter((i) => !isNaN(+i));
  const month = fullDateArray.filter((i) => isNaN(+i));

  return (
    <figure className={styles.card}>
      <img src={weatherIconFn()} className={styles.icon} alt="weather icon" />
      <div className={styles.temp}>
        <span className={styles.tempMax}>
          {tempMax === 0 ? "0°" : tempMax > 0 ? `+${tempMax}°` : `${tempMax}`}
        </span>
        <span className={styles.tempMin}>
          /{tempMin === 0 ? "0°" : tempMin > 0 ? `+${tempMin}°` : `${tempMin}`}
        </span>
      </div>
      <div className={styles.date}>
        <span className={styles.day}>{day}</span>
        <span className={styles.month}>{month}</span>
      </div>
    </figure>
  );
};

export default ForecastCard;
