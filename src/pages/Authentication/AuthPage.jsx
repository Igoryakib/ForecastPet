import { Outlet, Navigate } from "react-router-dom";
import HomePage from "../Homepage/HomePage";
import styles from "./AuthPage.module.scss";
import WindowOverlay from "../../components/small components/WindowOverlay/WindowOverlay";
import { useSelector } from "react-redux";
import { getUserData } from "../../redux/selectors";

const AuthPage = () => {
  const isLoggedIn = useSelector(getUserData) ? true : false;
  if (isLoggedIn) return <Navigate to="/auth/profile" />
  return (
    <>
      <div className={`grid ${styles.window}`}>
        <Outlet />
      </div>
      <WindowOverlay />
    </>
  );
};

export default AuthPage;
