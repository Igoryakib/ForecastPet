import React from "react";

import Footer from "./Footer/Footer";
import WeatherCard from "./WeatherCard/WeatherCard";
import Header from './Header/Header';


const  App = () => {
  return (
    <>
      <Header />
      <h1 className="App">Happy hacking ! :)</h1>
      <WeatherCard />
      <Footer />
    </>
  );
}

export default App;
