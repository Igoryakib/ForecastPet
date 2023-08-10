import { createAction } from "@reduxjs/toolkit";
import { WEATHER_REGION, WEATHER_LANGUAGE } from "./types";

const weatherRegion = createAction(WEATHER_REGION);
const weatherLanguage = createAction(WEATHER_LANGUAGE);

export { weatherRegion, weatherLanguage };
