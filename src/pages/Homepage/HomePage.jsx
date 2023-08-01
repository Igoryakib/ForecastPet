import React from "react";
import styles from "./HomePage.module.scss";

import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'


const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
