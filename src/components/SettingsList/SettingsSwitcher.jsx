import { useState } from "react";
import styles from "./SettingsSwitcher.module.scss";
import classnames from "classnames";

const SettingsSwitcher = function ({ textArray }) {
  const [value, setValue] = useState(false);
  console.log(value)
  
  return (
    <label className={styles.labelSwitcher}>
      <input
        className={styles.inputSwitcher}
        onChange={(event) => setValue(event.target.checked)}
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
      <span className={`${styles.active} ${value ? styles.right : styles.left}`}></span>
    </label>
  );
};

export default SettingsSwitcher;
