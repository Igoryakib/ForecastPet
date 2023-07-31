import React from "react";

import Footer from "./Footer/Footer";
import Header from './Header/Header';
import WeatherSection from "./WeatherSection/WeatherSection";
import WeatherWind from "./WeatherWind/WeatherWind";


const  App = () => {
  return (
    <>
      <Header />
      <WeatherSection />
      <WeatherWind AQiIndex={50} levelCo={15} levelO3={60}/>
      <Footer />
    </>
  );
}

export default App;
