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

// const regionInput = createReducer("", {
//   [weatherRegion]: (_, action) => action.payload,
// });

const regionInput = createReducer("", (builder) => {
  builder.addCase(weatherRegion, (_, action) => action.payload)
});

// const dailyWeather = createReducer("", {
//   [getDailyWeather.fulfilled]: (_, action) => action.payload,
// });

const dailyWeather = createReducer("", (builder) => {
  builder.addCase(getDailyWeather.fulfilled, (_, action) => action.payload)
});

// const hourlyWeather = createReducer("", {
//   [getHourlyWeather.fulfilled]: (_, action) => action.payload,
// });

const hourlyWeather = createReducer("", (builder) => {
  builder.addCase(getHourlyWeather.fulfilled, (_, action) => action.payload)
});

// const currentlyWeather = createReducer("", {
//   [getCurrentlyWeather.fulfilled]: (_, action) => action.payload,
// });

const currentlyWeather = createReducer("", (builder) => {
  builder.addCase(getCurrentlyWeather.fulfilled, (_, action) => action.payload)
});

// const airQuality = createReducer("", {
//   [getAirQuality.fulfilled]: (_, action) => action.payload,
// });

const airQuality = createReducer("", (builder) => {
  builder.addCase(getAirQuality.fulfilled, (_, action) => action.payload)
});

// const geoDetails = createReducer("", {
//   [getGeoDetails.fulfilled]: (_, action) => action.payload,
// });

const geoDetails = createReducer("", (builder) => {
  builder.addCase(getGeoDetails.fulfilled, (_, action) => action.payload)
});

// const language = createReducer("uk", {
//   [weatherLanguage]: (_, action) => action.payload,
// });

const language = createReducer("", (builder) => {
  builder.addCase(weatherLanguage, (_, action) => action.payload)
});

// const unit = createReducer("С", {
//   [temperatureUnit]: (_, action) => action.payload,
// });

const unit = createReducer("С", (builder) => {
  builder.addCase(temperatureUnit, (_, action) => action.payload)
});

// const isLoadingHourly = createReducer(true, {
//   [getHourlyWeather.pending]: () => true,
//   [getHourlyWeather.fulfilled]: () => false,
//   [getHourlyWeather.rejected]: () => false,
//   [weatherLoading]: (_, action) => action.payload,
// });

const isLoadingHourly = createReducer("С", (builder) => {
  builder.addCase(getHourlyWeather.pending, (_, action) => true)
  .addCase(getHourlyWeather.rejected, (_, action) => false)
  .addCase(getHourlyWeather.fulfilled, (_, action) => false)
  .addCase(weatherLoading, (_, action) => action.payload)
});

// const isLoadingCurrently = createReducer(true, {
//   [getCurrentlyWeather.pending]: () => true,
//   [getCurrentlyWeather.fulfilled]: () => false,
//   [getCurrentlyWeather.rejected]: () => false,
//   [getAirQuality.rejected]: () => false,
//   [weatherLoading]: (_, action) => action.payload,
// });

const isLoadingCurrently = createReducer("С", (builder) => {
  builder.addCase(getCurrentlyWeather.pending, (_, action) => true)
  .addCase(getCurrentlyWeather.rejected, (_, action) => false)
  .addCase(getCurrentlyWeather.fulfilled, (_, action) => false)
  .addCase(getAirQuality.rejected, (_, action) => false)
  .addCase(weatherLoading, (_, action) => action.payload)
});

// const isLoadingDaily = createReducer(true, {
//   [getDailyWeather.pending]: () => true,
//   [getDailyWeather.fulfilled]: () => false,
//   [getDailyWeather.rejected]: () => false,
//   [weatherLoading]: (_, action) => action.payload,
// });

const isLoadingDaily = createReducer("С", (builder) => {
  builder.addCase(getDailyWeather.pending, (_, action) => true)
  .addCase(getDailyWeather.rejected, (_, action) => false)
  .addCase(getDailyWeather.fulfilled, (_, action) => false)
  .addCase(weatherLoading, (_, action) => action.payload)
});

// const isLoadingGeo = createReducer(true, {
//   [getGeoDetails.pending]: () => true,
//   [getGeoDetails.fulfilled]: () => false,
//   [getGeoDetails.rejected]: () => false,
//   [weatherLoading]: (_, action) => action.payload,
// });

const isLoadingGeo = createReducer("С", (builder) => {
  builder.addCase(getGeoDetails.pending, (_, action) => true)
  .addCase(getGeoDetails.rejected, (_, action) => false)
  .addCase(getGeoDetails.fulfilled, (_, action) => false)
  .addCase(weatherLoading, (_, action) => action.payload)
});

// const isLoadingAirQuality = createReducer(true, {
//   [getAirQuality.pending]: () => true,
//   [getAirQuality.fulfilled]: () => false,
//   [getAirQuality.rejected]: () => false,
//   [weatherLoading]: (_, action) => action.payload,
// });

const isLoadingAirQuality = createReducer("С", (builder) => {
  builder.addCase(getAirQuality.pending, (_, action) => true)
  .addCase(getAirQuality.rejected, (_, action) => false)
  .addCase(getAirQuality.fulfilled, (_, action) => false)
  .addCase(weatherLoading, (_, action) => action.payload)
});

// const theme = createReducer(true, {
//   [weatherTheme]: (_, action) => action.payload,
// });

const theme = createReducer(true, (builder) => {
  builder.addCase(weatherTheme, (_, action) => action.payload)
});

// const error = createReducer("", {
//   [getDailyWeather.pending]: () => "",
//   [getHourlyWeather.pending]: () => "",
//   [getCurrentlyWeather.pending]: () => "",
//   [getGeoDetails.pending]: () => "",
//   [getDailyWeather.fulfilled]: () => "",
//   [getHourlyWeather.fulfilled]: () => "",
//   [getCurrentlyWeather.fulfilled]: () => "",
//   [getGeoDetails.fulfilled]: () => "",
//   [getDailyWeather.rejected]: (_, action) => action.payload,
//   [getHourlyWeather.rejected]: (_, action) => action.payload,
//   [getCurrentlyWeather.rejected]: (_, action) => action.payload,
//   [getGeoDetails.rejected]: (_, action) => action.payload,
//   [weatherError]: (_, action) => action.payload,
// });

const error = createReducer("", (builder) => {
  builder.addCase(getDailyWeather.pending, (_, action) => "")
  .addCase(getHourlyWeather.pending, (_, action) => "")
  .addCase(getCurrentlyWeather.pending, (_, action) => "")
  .addCase(getGeoDetails.pending, (_, action) => "")
  .addCase(getDailyWeather.fulfilled, (_, action) => "")
  .addCase(getHourlyWeather.fulfilled, (_, action) => "")
  .addCase(getCurrentlyWeather.fulfilled, (_, action) => "")
  .addCase(getGeoDetails.fulfilled, (_, action) => "")
  .addCase(getDailyWeather.rejected, (_, action) => action.payload)
  .addCase(getHourlyWeather.rejected, (_, action) => action.payload)
  .addCase(getCurrentlyWeather.rejected, (_, action) => action.payload)
  .addCase(getGeoDetails.rejected, (_, action) => action.payload)
  .addCase(weatherError, (_, action) => action.payload)
});

// const cities = createReducer("", {
//   [getCities.pending]: () => "",
//   [getCities.fulfilled]: (_, action) => action.payload,
// });

const cities = createReducer("", (builder) => {
  builder
  .addCase(getCities.pending, (_, action) => "")
  .addCase(getCities.fulfilled, (_, action) => action.payload)
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
