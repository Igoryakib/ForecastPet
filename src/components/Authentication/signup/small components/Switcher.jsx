import styles from "./Switcher.module.scss";
import classnames from "classnames";

const Switcher = function ({ value, setValue, highlightColor, textArray }) {
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
    </label>
  );
};

export default Switcher;
