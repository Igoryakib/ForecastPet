import { Outlet } from "react-router-dom";
import HomePage from "../Homepage/HomePage";
import styles from "./AuthPage.module.scss";
import WindowOverlay from "../../components/small components/WindowOverlay/WindowOverlay";
import WindowCloseBtn from "../../components/small components/WindowCloseBtn/WindowCloseBtn";

const AuthPage = () => {
  return (
    <>
      <div className={`grid ${styles.window}`}>
        <WindowCloseBtn />
        <Outlet />
      </div>
      <WindowOverlay />
    </>
  );
};

export default AuthPage;
