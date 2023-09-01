import axios from "axios";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5";

const API_KEY = "9ea4891c8392d9c904174b8d758cb626";

export const getWeatherData = async (type, data) => {
  const { regionData, lang } = data;
  try {
    if (typeof regionData === "object") {
      const { lat, lon } = regionData;
      const geoData = await axios.get(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=8&appid=${API_KEY}`
      );

      switch (type) {
        case "cities":
          const fetcher = async () => {
            const countryDetails = await axios.get(
              `https://restcountries.com/v3.1/alpha?codes=${geoData.data
                .map((city) => city.country)
                .join(",")}`
            );
            const result = [];
            geoData.data.map((city, index) => {
              result.push({
                country: countryDetails.data.filter(
                  (city, i) => city.cca2 === geoData.data[index].country
                )[0],
                city: city,
              });
            });
            return result;
          };
          return fetcher();
        case "hourly":
          const hourlyWeather = await axios.get(
            `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&units=metric&lon=${lon}&lang=${lang}&appid=${API_KEY}`
          );
          return hourlyWeather.data;
        case "currently":
          const currentlyWeather = await axios.get(
            `/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&appid=${API_KEY}`
          );
          return currentlyWeather.data;
        case "daily":
          const dailyWeather = await axios.get(
            `/forecast/daily?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&cnt=8&appid=${API_KEY}`
          );
          return dailyWeather.data;
        case "geo":
          const countryDetails = await axios.get(
            `https://restcountries.com/v3.1/alpha/${geoData.data[0].country}`
          );
          const flag = countryDetails.data[0]?.flag;
          const name_ENG = countryDetails.data[0]?.name.common;
          const name_NATIVE = countryDetails.data[0]?.name.nativeName.common;
          return {
            geoData: geoData.data?.at(0),
            countryData: { flag, name_ENG, name_NATIVE },
          };
        case "air":
          const airQuality = await axios.get(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
          );
          return airQuality.data;
        default:
          break;
      }
    } else {
      const geoData = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${regionData}&limit=8&appid=${API_KEY}`
      );

      const { lat = null, lon = null, country: countryCode } = geoData.data[0];
      switch (type) {
        case "cities":
          const fetcher = async () => {
            const countryDetails = await axios.get(
              `https://restcountries.com/v3.1/alpha?codes=${geoData.data
                .map((city) => city.country)
                .join(",")}`
            );
            const result = [];
            geoData.data.map((city, index) => {
              result.push({
                country: countryDetails.data.filter(
                  (city, i) => city.cca2 === geoData.data[index].country
                )[0],
                city: city,
              });
            });
            return result;
          };
          return fetcher();
        case "hourly":
          const hourlyWeather = await axios.get(
            `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&appid=${API_KEY}`
          );
          return hourlyWeather.data;
        case "currently":
          const currentlyWeather = await axios.get(
            `/weather?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&appid=${API_KEY}`
          );
          return currentlyWeather.data;
        case "daily":
          const dailyWeather = await axios.get(
            `/forecast/daily?lat=${lat}&lon=${lon}&lang=${lang}&units=metric&cnt=8&appid=${API_KEY}`
          );
          return dailyWeather.data;
        case "geo":
          const countryDetails = await axios.get(
            `https://restcountries.com/v3.1/alpha/${countryCode}`
          );
          const threeLetterCode = countryDetails.data[0].cca3.toLowerCase();
          const flag = countryDetails.data[0].flag;
          const name_ENG = countryDetails.data[0].name.common;
          const name_NATIVE =
            countryDetails.data[0].name.nativeName[threeLetterCode]?.common;
          return {
            geoData: geoData.data[0],
            countryData: { flag, name_ENG, name_NATIVE },
          };
        case "air":
          const airQuality = await axios.get(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
          );
          return airQuality.data;

        default:
          break;
      }
    }
  } catch (error) {
    throw error;
  }
};
