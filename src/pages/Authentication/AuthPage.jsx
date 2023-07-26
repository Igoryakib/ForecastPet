import { useState } from "react";
import { Outlet } from "react-router-dom";
import HomePage from "../Homepage/HomePage";
import styles from './AuthPage.module.scss'

const LoginPage = () => {

  return (
    <>
      <div className={`grid ${styles.window}`}>
        <Outlet  />
      </div>
      <HomePage />
      <div className={styles.overlay}></div>
      <div className={styles.close}></div>
    </>
  );
};

export default LoginPage;
