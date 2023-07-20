import React from "react";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1 className="App">Happy hacking ! :)</h1>
      <WeatherCard />
      <Footer />
    </>
  );
};

export default HomePage;
