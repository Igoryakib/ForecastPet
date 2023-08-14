import { createAction } from "@reduxjs/toolkit";
import { WEATHER_REGION, WEATHER_LANGUAGE, TEMPERATURE_UNIT } from "./types";

const weatherRegion = createAction(WEATHER_REGION);
const weatherLanguage = createAction(WEATHER_LANGUAGE);
const temperatureUnit = createAction(TEMPERATURE_UNIT);

export { weatherRegion, weatherLanguage, temperatureUnit };
