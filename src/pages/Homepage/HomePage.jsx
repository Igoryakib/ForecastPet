import React, { memo, useEffect } from "react";
import styles from "./HomePage.module.scss";

import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { getWeather, getError } from "../../redux/selectors";
import Message from "../../components/Message/Message";
import { useNavigate } from "react-router-dom";

const HomePage = memo(function HomePage(){
  const { isLoading } = useSelector(getWeather);
  const error = useSelector(getError);
  const navigate = useNavigate()
  useEffect(() => {
    if (error) {
      navigate("/error");
    }
  }, [error]);
  return (
    <div className={styles.homepage}>
      {isLoading ? <Message color="yellow" type="loading" /> : ""}
      <Header />
      <Main />
      <Footer />
    </div>
  );
});

export default HomePage;
