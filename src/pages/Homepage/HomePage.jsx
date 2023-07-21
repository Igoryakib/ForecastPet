import React from "react";

import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Footer from "../../components/Footer/Footer";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <h1 className="App">Happy hacking ! :)</h1>
      <WeatherCard />
      <Footer />
    </div>
  );
};

export default HomePage;
