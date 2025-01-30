import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./ButtonHome.module.scss";
import { useDispatch } from "react-redux";
import { weatherError } from "../../redux/actions";

const ButtonHome = function () {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const OnClickNavBtn = () => {
    dispatch(weatherError(""));
    navigate("/", { replace: true });
  };
  return (
    <button className={styles.navBtn} onClick={OnClickNavBtn} type="button">
      На головну
    </button>
  );
};

export default ButtonHome;
