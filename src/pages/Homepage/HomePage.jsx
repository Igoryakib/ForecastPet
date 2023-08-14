import React from "react";
import styles from "./HomePage.module.scss";

import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { getWeather } from "../../redux/selectors";
import Message from "../../components/Message/Message";

const HomePage = () => {
  const { isLoading } = useSelector(getWeather);
  return (
    <div className={styles.homepage}>
      {isLoading ? <Message color="yellow" type="loading" /> : ""}
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
