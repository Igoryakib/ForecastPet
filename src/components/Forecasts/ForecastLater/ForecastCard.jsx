import styles from "./ForecastCard.module.scss";

import icon_cloudyRainy from "../../../static/cardIcon__cloudy_rainy.svg";
import icon_cloudySnowy from "../../../static/cardIcon__cloudy_snowy.svg";
import icon_cloudyStorm from "../../../static/cardIcon__cloudy_storm.svg";
import icon_partlyCloudy from "../../../static/cardIcon__day_partlycloudy.svg";
import icon_sunny from "../../../static/cardIcon__sunny.svg";
import icon_snowy from "../../../static/cardIcon__snowy.svg";
import icon_rainy from "../../../static/cardIcon__rainy.svg";

const ForecastCard = function ({
  tempMax = 30,
  tempMin = 20,
  icon = "rainy",
  date = "1 August",
}) {
  const currentIcon = [
    icon_cloudyRainy,
    icon_cloudySnowy,
    icon_cloudyStorm,
    icon_partlyCloudy,
    icon_rainy,
    icon_snowy,
    icon_sunny,
  ].filter((i) => i.split("__")[1].startsWith(icon));

  const options = {
    day: "numeric",
    month: "long",
  };
  const fullDateArray = Intl.DateTimeFormat("uk", options)
    .format(new Date(date))
    .split(" ");
  const day = fullDateArray.filter((i) => !isNaN(+i));
  const month = fullDateArray.filter((i) => isNaN(+i));

  return (
    <figure className={styles.card}>
      <img src={currentIcon} className={styles.icon} alt="weather icon" />
      <div className={styles.temp}>
        <span className={styles.tempMax}>
          {tempMax === 0 ? "0" : tempMax > 0 ? `+${tempMax}°` : `-${tempMax}`}
        </span>
        <span className={styles.tempMin}>
          /{tempMin === 0 ? "0" : tempMin > 0 ? `+${tempMin}°` : `-${tempMin}`}
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
