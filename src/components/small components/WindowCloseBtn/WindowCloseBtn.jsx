import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./WindowCloseBtn.module.scss";

const WindowCloseBtn = function () {
  const navigate = useNavigate();

  return (
    <button className={styles.closeButton} onClick={() => navigate("/")}>
      &times;
    </button>
  );
};

export default WindowCloseBtn;
