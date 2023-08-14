import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { weatherRegion, weatherLanguage, temperatureUnit } from "./actions";
import {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
  getGeoDetails,
  getAirQuality,
} from "./action-operations";

const regionInput = createReducer("", {
  [weatherRegion]: (_, action) => action.payload,
});

const dailyWeather = createReducer(
  {},
  {
    [getDailyWeather.fulfilled]: (_, action) => action.payload,
  }
);

const hourlyWeather = createReducer(
  {},
  {
    [getHourlyWeather.fulfilled]: (_, action) => action.payload,
  }
);

const currentlyWeather = createReducer(
  {},
  {
    [getCurrentlyWeather.fulfilled]: (_, action) => action.payload,
  }
);

const airQuality = createReducer(
  {},
  {
    [getAirQuality.fulfilled]: (_, action) => action.payload,
  }
);

const geoDetails = createReducer(
  {},
  {
    [getGeoDetails.fulfilled]: (_, action) => action.payload,
  }
);

const language = createReducer("", {
  [weatherLanguage]: (_, action) => action.payload,
});

const unit = createReducer("С", {
  [temperatureUnit]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
  [getDailyWeather.pending]: () => true,
  [getHourlyWeather.pending]: () => true,
  [getCurrentlyWeather.pending]: () => true,
  [getGeoDetails.pending]: () => true,
  [getAirQuality.pending]: () => true,
  [getDailyWeather.fulfilled]: () => false,
  [getHourlyWeather.fulfilled]: () => false,
  [getCurrentlyWeather.fulfilled]: () => false,
  [getGeoDetails.fulfilled]: () => false,
  [getAirQuality.fulfilled]: () => false,
  [getDailyWeather.rejected]: () => false,
  [getHourlyWeather.rejected]: () => false,
  [getCurrentlyWeather.rejected]: () => false,
  [getGeoDetails.rejected]: () => false,
  [getAirQuality.rejected]: () => false,
});

const error = createReducer("", {
  [getDailyWeather.pending]: () => "",
  [getHourlyWeather.pending]: () => "",
  [getCurrentlyWeather.pending]: () => "",
  [getGeoDetails.pending]: () => "",
  [getDailyWeather.rejected]: (_, action) => action.payload,
  [getHourlyWeather.rejected]: (_, action) => action.payload,
  [getCurrentlyWeather.rejected]: (_, action) => action.payload,
  [getGeoDetails.rejected]: (_, action) => action.payload,
});

export default combineReducers({
  regionInput,
  dailyWeather,
  hourlyWeather,
  currentlyWeather,
  geoDetails,
  language,
  unit,
  isLoading,
  error,
  airQuality,
});
