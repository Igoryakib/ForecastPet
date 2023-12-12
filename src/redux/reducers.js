import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  weatherRegion,
  weatherLanguage,
  temperatureUnit,
  weatherLoading,
  weatherError,
  weatherTheme,
} from "./actions";
import {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
  getGeoDetails,
  getAirQuality,
  getCities,
} from "./action-operations";

const regionInput = createReducer("", {
  [weatherRegion]: (_, action) => action.payload,
});

const dailyWeather = createReducer("", {
  [getDailyWeather.fulfilled]: (_, action) => action.payload,
});

const hourlyWeather = createReducer("", {
  [getHourlyWeather.fulfilled]: (_, action) => action.payload,
});

const currentlyWeather = createReducer("", {
  [getCurrentlyWeather.fulfilled]: (_, action) => action.payload,
});

const airQuality = createReducer("", {
  [getAirQuality.fulfilled]: (_, action) => action.payload,
});

const geoDetails = createReducer("", {
  [getGeoDetails.fulfilled]: (_, action) => action.payload,
});

const language = createReducer("en", {
  [weatherLanguage]: (_, action) => "en",
});

const unit = createReducer("С", {
  [temperatureUnit]: (_, action) => action.payload,
});

const isLoadingHourly = createReducer(true, {
  [getHourlyWeather.pending]: () => true,
  [getHourlyWeather.fulfilled]: () => false,
  [getHourlyWeather.rejected]: () => false,
  [weatherLoading]: (_, action) => action.payload,
});

const isLoadingCurrently = createReducer(true, {
  [getCurrentlyWeather.pending]: () => true,
  [getCurrentlyWeather.fulfilled]: () => false,
  [getCurrentlyWeather.rejected]: () => false,
  [getAirQuality.rejected]: () => false,
  [weatherLoading]: (_, action) => action.payload,
});

const isLoadingDaily = createReducer(true, {
  [getDailyWeather.pending]: () => true,
  [getDailyWeather.fulfilled]: () => false,
  [getDailyWeather.rejected]: () => false,
  [weatherLoading]: (_, action) => action.payload,
});

const isLoadingGeo = createReducer(true, {
  [getGeoDetails.pending]: () => true,
  [getGeoDetails.fulfilled]: () => false,
  [getGeoDetails.rejected]: () => false,
  [weatherLoading]: (_, action) => action.payload,
});

const isLoadingAirQuality = createReducer(true, {
  [getAirQuality.pending]: () => true,
  [getAirQuality.fulfilled]: () => false,
  [getAirQuality.rejected]: () => false,
  [weatherLoading]: (_, action) => action.payload,
});

const theme = createReducer(true, {
  [weatherTheme]: (_, action) => action.payload,
});

const error = createReducer("", {
  [getDailyWeather.pending]: () => "",
  [getHourlyWeather.pending]: () => "",
  [getCurrentlyWeather.pending]: () => "",
  [getGeoDetails.pending]: () => "",
  [getDailyWeather.fulfilled]: () => "",
  [getHourlyWeather.fulfilled]: () => "",
  [getCurrentlyWeather.fulfilled]: () => "",
  [getGeoDetails.fulfilled]: () => "",
  [getDailyWeather.rejected]: (_, action) => action.payload,
  [getHourlyWeather.rejected]: (_, action) => action.payload,
  [getCurrentlyWeather.rejected]: (_, action) => action.payload,
  [getGeoDetails.rejected]: (_, action) => action.payload,
  [weatherError]: (_, action) => action.payload,
});

const cities = createReducer("", {
  [getCities.pending]: () => "",
  [getCities.fulfilled]: (_, action) => action.payload,
});

export default combineReducers({
  regionInput,
  dailyWeather,
  hourlyWeather,
  currentlyWeather,
  geoDetails,
  language,
  unit,
  isLoadingHourly,
  isLoadingCurrently,
  isLoadingDaily,
  isLoadingGeo,
  isLoadingAirQuality,
  error,
  airQuality,
  theme,
  cities,
});
