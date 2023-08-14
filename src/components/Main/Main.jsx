import styles from "./Main.module.scss";
import "./Queries.module.css";

import ForecastLater from "../Forecasts/ForecastLater/ForecastLater";
import ForecastTomorrow from "../Forecasts/ForecastTomorrow/ForecastTomorrow";
import WeatherSection from "../WeatherSection/WeatherSection";
import WeatherWind from "../WeatherWind/WeatherWind";

const Main = function () {
  return (
    <main className="grid">
      <WeatherSection />
      <ForecastTomorrow />
      <WeatherWind AQiIndex={50} levelCo={15} levelO3={60} />
      <ForecastLater />
    </main>
  );
};

export default Main;
