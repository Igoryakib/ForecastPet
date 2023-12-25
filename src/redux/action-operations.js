import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  WEATHER_DAILY,
  WEATHER_HOURLY,
  WEATHER_CURRENTLY,
  WEATHER_GEO,
  AIR_QUALITY,
  GET_CITIES,
  GET_USER,
  SIGN_OUT_USER,
  LOGIN_USER,
} from "./types";
import { getWeatherData } from "../utils/fetchApi";
import { handleGetUser } from "../services/apiGetUser";
import { handleSignout } from "../services/apiSignOut";
import { handleLogin } from "../services/apiLogin";

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

const getUser = createAsyncThunk(GET_USER, () => {
  return handleGetUser();
});

const signOutUser = createAsyncThunk(SIGN_OUT_USER, () => {
  return handleSignout();
});

const loginUser = createAsyncThunk(LOGIN_USER, (data) => {
  return handleLogin(data.email, data.password, data.first_name);
});

export {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
  getGeoDetails,
  getAirQuality,
  getCities,
  getUser,
  signOutUser,
  loginUser,
};
