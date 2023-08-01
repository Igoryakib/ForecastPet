import { useState } from "react";
import Switcher from "../../small components/ForecastSwitcher/ForecastSwitcher";
import styles from "./ForecastLater.module.scss";
import Time from "./Time";
import ForecastCard from "./ForecastCard";

const TEMPORARY_DATA = [
  {
    date: "8 July",
    tempMax: "31",
    tempMin: "21",
    icon: "sunny",
  },
  {
    date: "9 July",
    tempMax: "25",
    tempMin: "23",
    icon: "cloudy_storm",
  },
  {
    date: "10 July",
    tempMax: "20",
    tempMin: "19",
    icon: "day_partlycloudy",
  },
  {
    date: "11 July",
    tempMax: "24",
    tempMin: "22",
    icon: "sunny",
  },
  {
    date: "12 July",
    tempMax: "21",
    tempMin: "15",
    icon: "day_partlycloudy",
  },
  {
    date: "13 July",
    tempMax: "17",
    tempMin: "15",
    icon: "snowy",
  },
  {
    date: "14 July",
    tempMax: "16",
    tempMin: "12",
    icon: "cloudy_snowy",
  },
];

const ForecastLater = function () {
  const [isMoreDays, setIsMoreDays] = useState(false);

  return (
    <section className={styles.section}>
      {/* <div className={styles.container} > */}
      <Switcher
        textArray={["3 дні", "7 днів"]}
        value={isMoreDays}
        setValue={setIsMoreDays}
      />
      <h3 className={styles.heading}>Прогноз погоди</h3>
      {/* <ForecastCard date="11 August" icon='cloudy_snowy' />
      <ForecastCard date="12 August" icon='rainy' /> */}
      {isMoreDays
        ? TEMPORARY_DATA.map((day) => (
            <ForecastCard
              key={day.date}
              date={day.date}
              tempMax={day.tempMax}
              tempMin={day.tempMin}
              icon={day.icon}
            />
          ))
        : TEMPORARY_DATA.slice(0, 3).map((day) => (
            <ForecastCard
              key={day.date}
              date={day.date}
              tempMax={day.tempMax}
              tempMin={day.tempMin}
              icon={day.icon}
            />
          ))}
      <Time />
      {/* </div> */}
    </section>
  );
};

export default ForecastLater;
