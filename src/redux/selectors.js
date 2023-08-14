const getLanguage = (state) => state.weatherData.language;
const getWeather = (state) => state.weatherData;
const getGeo = (state) => state.weatherData.geoDetails;
const getUnit = (state) => state.weatherData.unit;
const getAir = (state) => state.weatherData.airQuality;

export { getLanguage, getWeather, getGeo, getUnit, getAir };
