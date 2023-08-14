import React from "react";
import styles from "./Switcher.module.scss";
import classnames from "classnames";

const Switcher = ({ value, setValue }) => {
  return (
    <label className={styles.labelSwitcher}>
      <input
        className={styles.inputSwitcher}
        onChange={(event) => setValue(event)}
        type="checkbox"
        checked={value}
      />
      <div className={styles.wrapperTemp}>
        <span className={classnames(styles.tempText, styles.tempColorW)}>
          C°
        </span>
        <span className={classnames(styles.tempText, styles.tempColorD)}>
          F°
        </span>
      </div>
    </label>
  );
};

export default Switcher;
