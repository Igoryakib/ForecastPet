import { Outlet, Navigate, useNavigate } from "react-router-dom";
import HomePage from "../Homepage/HomePage";
import styles from "./AuthPage.module.scss";
import WindowOverlay from "../../components/small components/WindowOverlay/WindowOverlay";
import { useSelector } from "react-redux";
import { getUserData } from "../../redux/selectors";

const AuthPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getUserData) ? true : false;
  if (isLoggedIn) navigate("/auth/profile");
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
