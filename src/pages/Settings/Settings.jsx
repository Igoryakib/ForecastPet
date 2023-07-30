import React from "react";
import styles from "./Settings.module.scss";
import WindowOverlay from "../../components/small components/WindowOverlay/WindowOverlay";
import HomePage from "../Homepage/HomePage";
import Heading from "../../components/small components/Heading/Heading";
import SettingsList from "../../components/SettingsList/SettingsList";
import WindowCloseBtn from "../../components/small components/WindowCloseBtn/WindowCloseBtn";

const Options = () => {
  return (
    <>
      <div className={styles.window}>
        <Heading size="3.2rem">Налаштування</Heading>
        <SettingsList />
        <WindowCloseBtn />
      </div>
      <WindowOverlay />
      <HomePage />
    </>
  );
};

export default Options;
