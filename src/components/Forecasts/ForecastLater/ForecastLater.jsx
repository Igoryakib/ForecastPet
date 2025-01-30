import React, { useEffect, useState } from "react";
import Switcher from "../../small components/ForecastSwitcher/ForecastSwitcher";
import styles from "./ForecastLater.module.scss";
import Time from "./Time";
import ForecastCard from "./ForecastCard";
import { getDaily, getLanguage, getUnit } from "../../../redux/selectors";
import { useSelector } from "react-redux";
import { convertUnitFn } from "../../../utils/convertUnitFn";

const ForecastLater = function () {
  const [isMoreDays, setIsMoreDays] = useState(false);
  const language = useSelector(getLanguage);
  const dailyWeather = useSelector(getDaily);
  const unit = useSelector(getUnit);

  return (
    <section className={styles.section}>
      <Switcher
        textArray={
          language === "uk" ? ["3 дні", "7 днів"] : ["3 days", "7 days"]
        }
        value={isMoreDays}
        setValue={setIsMoreDays}
      />
      <h3 className={styles.heading}>
        {language === "uk" ? "Прогноз погоди" : "Weather Forecast"}
      </h3>
      {isMoreDays
        ? dailyWeather.list
            .slice(1, 8)
            .map((day) => (
              <ForecastCard
                key={day.dt}
                date={new Date(day.dt * 1000)}
                tempMax={
                  unit === "C"
                    ? Math.round(+day.temp.max)
                    : Math.round(convertUnitFn(+day.temp.max))
                }
                tempMin={
                  unit === "C"
                    ? Math.round(+day.temp.min)
                    : Math.round(convertUnitFn(+day.temp.min))
                }
                icon={day.weather[0].icon}
                language={language}
              />
            ))
        : dailyWeather.list
            .slice(1, 4)
            .map((day) => (
              <ForecastCard
                key={day.dt}
                date={new Date(day.dt * 1000)}
                tempMax={
                  unit === "C"
                    ? Math.round(+day.temp.max)
                    : Math.round(convertUnitFn(+day.temp.max))
                }
                tempMin={
                  unit === "C"
                    ? Math.round(+day.temp.min)
                    : Math.round(convertUnitFn(+day.temp.min))
                }
                language={language}
                icon={day.weather[0].icon}
              />
            ))}
      <Time language={language} />
    </section>
  );
};

export default ForecastLater;
