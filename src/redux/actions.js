import { createAction } from "@reduxjs/toolkit";
import {
  WEATHER_REGION,
  WEATHER_LANGUAGE,
  TEMPERATURE_UNIT,
  WEATHER_LOADING,
  WEATHER_ERROR,
} from "./types";

const weatherRegion = createAction(WEATHER_REGION);
const weatherLanguage = createAction(WEATHER_LANGUAGE);
const temperatureUnit = createAction(TEMPERATURE_UNIT);
const weatherLoading = createAction(WEATHER_LOADING);
const weatherError = createAction(WEATHER_ERROR);

export {
  weatherRegion,
  weatherLanguage,
  temperatureUnit,
  weatherLoading,
  weatherError,
};
