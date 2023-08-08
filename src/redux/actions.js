import { createAction } from "@reduxjs/toolkit";
import { WEATHER_REGION } from "./types";

const weatherRegion = createAction(WEATHER_REGION);

export { weatherRegion };