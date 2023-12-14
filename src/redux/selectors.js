const getLanguage = (state) => state.weatherData.language;
const getWeather = (state) => state.weatherData;
const getGeo = (state) => state.weatherData.geoDetails;
const getUnit = (state) => state.weatherData.unit;
const getAir = (state) => state.weatherData.airQuality;
const getError = (state) => state.weatherData.error;
const getDaily = (state) => state.weatherData.dailyWeather;
const getIsLoadingHourly = (state) => state.weatherData.isLoadingHourly;
const getIsLoadingCurrently = (state) => state.weatherData.isLoadingCurrently;
const getIsLoadingDaily = (state) => state.weatherData.isLoadingDaily;
const getIsLoadingGeo = (state) => state.weatherData.isLoadingGeo;
const getIsLoadingAirQuality = (state) => state.weatherData.isLoadingAirQuality;
const getTheme = (state) => state.weatherData.theme;
const getCities = (state) => state.weatherData.cities;
const getUserData = (state) => state.user.userData;
const getIsUserLoading = (state) => state.user.getIsUserLoading;

export {
  getLanguage,
  getWeather,
  getGeo,
  getUnit,
  getAir,
  getError,
  getIsLoadingHourly,
  getIsLoadingCurrently,
  getIsLoadingDaily,
  getIsLoadingGeo,
  getIsLoadingAirQuality,
  getDaily,
  getTheme,
  getCities,
  getUserData,
  getIsUserLoading,
};
