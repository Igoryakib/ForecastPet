import axios from "axios";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

const API_KEY = "9ea4891c8392d9c904174b8d758cb626";

export const getWeatherData = async (type, { regionData, lang }) => {
  try {
    if (typeof regionData === Object) {
      switch (type) {
        case "hourly":
          const hourlyWeather = await axios.get(
            `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${regionData.lat}&lon=${regionData.lon}&lang=${lang}&appid=${API_KEY}`
          );
          return hourlyWeather.data;
        case "currently":
          const currentlyWeather = await axios.get(
            `/weather?lat=${regionData.lat}&lon=${regionData.lon}&lang=${lang}&appid=${API_KEY}`
          );
          return currentlyWeather.data;
        case "daily":
          const dailyWeather = await axios.get(
            `/forecast/daily?lat=${regionData.lat}&lon=${regionData.lon}&lang=${lang}&appid=${API_KEY}`
          );
          return dailyWeather.data;
        default:
          break;
      }
    } else {
      const geoData = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${regionData}&limit=5&appid=${API_KEY}`
      );
      const { lat, lon } = geoData.data[0];
      switch (type) {
        case "hourly":
          const hourlyWeather = await axios.get(
            `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&lang=${lang}&appid=${API_KEY}`
          );
          return hourlyWeather.data;
        case "currently":
          const currentlyWeather = await axios.get(
            `/weather?lat=${lat}&lon=${lon}&lang=${lang}&appid=${API_KEY}`
          );
          return currentlyWeather.data;
        case "daily":
          const dailyWeather = await axios.get(
            `/forecast/daily?lat=${lat}&lon=${lon}&lang=${lang}&appid=${API_KEY}`
          );
          return dailyWeather.data;
        default:
          break;
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
