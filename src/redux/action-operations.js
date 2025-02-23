import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  WEATHER_DAILY,
  WEATHER_HOURLY,
  WEATHER_CURRENTLY,
  WEATHER_GEO,
  AIR_QUALITY,
  GET_CITIES,
} from "./types";
import { getWeatherData } from "../utils/fetchApi";

const getDailyWeather = createAsyncThunk(
  WEATHER_DAILY,
  (data, { rejectWithValue }) => {
    return getWeatherData("daily", data)
      .then((data) => data)
      .catch((error) => rejectWithValue(error));
  },
);

const getHourlyWeather = createAsyncThunk(
  WEATHER_HOURLY,
  (data, { rejectWithValue }) => {
    console.log("requeste hourly");
    return getWeatherData("hourly", data)
      .then((data) => data)
      .catch((error) => rejectWithValue(error));
  },
);

const getCurrentlyWeather = createAsyncThunk(
  WEATHER_CURRENTLY,
  (data, { rejectWithValue }) => {
    return getWeatherData("currently", data)
      .then((data) => data)
      .catch((error) => rejectWithValue(error));
  },
);

const getGeoDetails = createAsyncThunk(
  WEATHER_GEO,
  (data, { rejectWithValue }) => {
    return getWeatherData("geo", data)
      .then((data) => data)
      .catch((error) => rejectWithValue(error));
  },
);

const getAirQuality = createAsyncThunk(
  AIR_QUALITY,
  (data, { rejectWithValue }) => {
    return getWeatherData("air", data)
      .then((data) => data)
      .catch((error) => rejectWithValue(error));
  },
);

const getCities = createAsyncThunk(GET_CITIES, (data, { rejectWithValue }) => {
  return getWeatherData("cities", data)
    .then((data) => data)
    .catch((error) => rejectWithValue(error));
});

export {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
  getGeoDetails,
  getAirQuality,
  getCities,
};
