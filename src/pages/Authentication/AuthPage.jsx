import { useState } from "react";
import { Outlet } from "react-router-dom";
import HomePage from "../Homepage/HomePage";
import styles from "./AuthPage.module.scss";
import WindowOverlay from "../../components/small components/WindowOverlay/WindowOverlay";

const AuthPage = () => {
  return (
    <>
      <div className={`grid ${styles.window}`}>
        <Outlet />
      </div>
      <HomePage />
      <WindowOverlay />
    </>
  );
};

export default AuthPage;