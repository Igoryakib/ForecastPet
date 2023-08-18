import Dots from "../Message/Dots";
import styles from "./isLoadingWindow.module.scss";

const isLoadingWindow = function () {
  return (
    <div className={styles.isLoadingWindow}>
      <Dots />
    </div>
  );
};

export default isLoadingWindow;
