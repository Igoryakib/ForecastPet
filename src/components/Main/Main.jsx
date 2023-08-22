import styles from "./Main.module.scss";
import "./Queries.module.css";

import ForecastLater from "../Forecasts/ForecastLater/ForecastLater";
import ForecastTomorrow from "../Forecasts/ForecastTomorrow/ForecastTomorrow";
import WeatherSection from "../WeatherSection/WeatherSection";
import WeatherWind from "../WeatherWind/WeatherWind";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import {
  getIsLoadingAirQuality,
  getIsLoadingCurrently,
  getIsLoadingDaily,
  getIsLoadingGeo,
  getIsLoadingHourly,
} from "../../redux/selectors";

import WeatherSectionSkeleton from "../WeatherSection/WeatherSectionSkeleton";
import WeatherWindSkeleton from "../WeatherWind/WeatherWindSkeleton";
import ForecastTomorrowSkeleton from "../Forecasts/ForecastTomorrow/ForecastTomorrowSkeleton";
import ForecastLaterSkeleton from "../Forecasts/ForecastLater/ForecastLaterSkeleton";
const Main = function () {
  // selectors
  const isLoadingHourly = useSelector(getIsLoadingHourly);
  const isLoadingCurrently = useSelector(getIsLoadingCurrently);
  const isLoadingGeo = useSelector(getIsLoadingGeo);
  const isLoadingAirQuality = useSelector(getIsLoadingAirQuality);
  const isLoadingDaily = useSelector(getIsLoadingDaily);

  // conditions
  const isLoadingWeatherSection =
    isLoadingCurrently || isLoadingCurrently || isLoadingGeo || isLoadingHourly;
  const isLoadingForecast = isLoadingGeo || isLoadingDaily;
  const isLoadingWeatherWind = isLoadingGeo || isLoadingAirQuality;

  return (
    <main className="grid">
      {isLoadingWeatherSection ? (
        <WeatherSectionSkeleton />
      ) : (
        <WeatherSection />
      )}
      {isLoadingForecast ? (
          <ForecastTomorrowSkeleton />
      ) : (
        <ForecastTomorrow />
      )}
      {isLoadingWeatherWind ? (
          <WeatherWindSkeleton />
      ) : (
        <WeatherWind />
      )}
      {isLoadingForecast ? (
          <ForecastLaterSkeleton />
      ) : (
        <ForecastLater />
      )}
    </main>
  );
};

export default Main;
