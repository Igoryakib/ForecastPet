import React from 'react';
import styles from "./ForecastSwitcher.module.scss";
import classnames from "classnames";
import { useState } from "react";

const Switcher = function ({ textArray, value, setValue }) {
  return (
    <label className={styles.labelSwitcher}>
      <input
        className={styles.inputSwitcher}
        onChange={(event) => setValue((i) => !i)}
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
