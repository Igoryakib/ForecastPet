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
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: "5.4rem", backgroundColor: "#e9e9e9" }}
          animation="pulse"
        >
          <WeatherSection />
        </Skeleton>
      ) : (
        <WeatherSection />
      )}
      {isLoadingForecast ? (
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: "4rem", backgroundColor: "#e9e9e9" }}
          animation="pulse"
        >
          <ForecastTomorrow />
        </Skeleton>
      ) : (
        <ForecastTomorrow />
      )}
      {isLoadingWeatherWind ? (
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: "5.4rem", backgroundColor: "#e9e9e9" }}
          animation="pulse"
        >
          <WeatherWind />
        </Skeleton>
      ) : (
        <WeatherWind />
      )}
      {isLoadingForecast ? (
        <Skeleton
          variant="rounded"
          sx={{ borderRadius: "4rem", backgroundColor: "#e9e9e9" }}
          animation="pulse"
        >
          <ForecastLater />
        </Skeleton>
      ) : (
        <ForecastLater />
      )}
    </main>
  );
};

export default Main;
