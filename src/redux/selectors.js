const getLanguage = (state) => state.weatherData.language;
const getWeather = (state) => state.weatherData;
const getGeo = (state) => state.weatherData.geoDetails;
const getUnit = (state) => state.weatherData.unit;
const getAir = (state) => state.weatherData.airQuality;
const getError = (state) => state.weatherData.error;
const getIsLoading = (state) => state.weatherData.isLoading

export { getLanguage, getWeather, getGeo, getUnit, getAir, getError, getIsLoading };
