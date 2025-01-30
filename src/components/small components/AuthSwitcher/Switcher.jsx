import React, { useLocation, useNavigate } from "react-router-dom";
import styles from "./Switcher.module.scss";
import classnames from "classnames";
import { useState } from "react";

const Switcher = function ({ textArray }) {
  const location = useLocation();
  const authPath = location.pathname.split("/")[2];
  const navigate = useNavigate();

  const [value, setValue] = useState(() => {
    return authPath === "login" ? false : authPath === "signup" ? true : "";
  });

  return (
    <label className={styles.labelSwitcher}>
      <input
        className={styles.inputSwitcher}
        onChange={(event) => {
          setTimeout(
            () => navigate(authPath === "login" ? "../signup" : "../login"),
            260,
          );
          return setValue(event.target.checked);
        }}
        type="checkbox"
        checked={value}
      />
      <div className={styles.wrapperTemp}>
        <span className={classnames(styles.tempText, styles.tempColorW)}>
          {textArray[0]}
        </span>
        <span className={classnames(styles.tempText, styles.tempColorD)}>
          {textArray[1]}
        </span>
      </div>
    </label>
  );
};

export default Switcher;
