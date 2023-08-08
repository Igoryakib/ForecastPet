import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { weatherRegion } from "./actions";
import {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
} from "./action-operations";

const region = createReducer("", {
  [weatherRegion]: (_, action) => action.payload,
});

const dailyWeather = createReducer({},
  {
    [getDailyWeather.fulfilled]: (_, action) => action.payload,
  }
);

const hourlyWeather = createReducer({},
  {
    [getHourlyWeather.fulfilled]: (_, action) => action.payload,
  }
);

const currentlyWeather = createReducer({},
  {
    [getCurrentlyWeather.fulfilled]: (_, action) => action.payload,
  }
);

const isLoading = createReducer(false, {
  [getDailyWeather.pending]: () => true,
  [getHourlyWeather.pending]: () => true,
  [getCurrentlyWeather.pending]: () => true,
  [getDailyWeather.fulfilled]: () => false,
  [getHourlyWeather.fulfilled]: () => false,
  [getCurrentlyWeather.fulfilled]: () => false,
  [getDailyWeather.rejected]: () => false,
  [getHourlyWeather.rejected]: () => false,
  [getCurrentlyWeather.rejected]: () => false,
});

const error = createReducer("", {
  [getDailyWeather.pending]: () => "",
  [getHourlyWeather.pending]: () => "",
  [getCurrentlyWeather.pending]: () => "",
  [getDailyWeather.rejected]: (_, action) => action.payload,
  [getHourlyWeather.rejected]: (_, action) => action.payload,
  [getCurrentlyWeather.rejected]: (_, action) => action.payload,
});

export default combineReducers({
  region,
  dailyWeather,
  hourlyWeather,
  currentlyWeather,
  isLoading,
  error,
});
