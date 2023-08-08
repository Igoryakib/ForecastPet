import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  WEATHER_DAILY,
  WEATHER_HOURLY,
  WEATHER_CURRENTLY,
} from "./types";
import { getWeatherData } from "../utils/fetchApi";

const getDailyWeather = createAsyncThunk(
  WEATHER_DAILY,
  (data, { rejectWithValue }) => {
    return getWeatherData("daily", data)
      .then((data) => data)
      .catch((error) => rejectWithValue(error));
  }
);

const getHourlyWeather = createAsyncThunk(
  WEATHER_HOURLY,
  (data, { rejectWithValue }) => {
    return getWeatherData("hourly", data)
      .then((data) => data)
      .catch((error) => rejectWithValue(error));
  }
);

const getCurrentlyWeather = createAsyncThunk(
  WEATHER_CURRENTLY,
  (data, { rejectWithValue }) => {
    return getWeatherData("currently", data)
      .then((data) => data)
      .catch((error) => rejectWithValue(error));
  }
);

export { getDailyWeather, getHourlyWeather, getCurrentlyWeather };