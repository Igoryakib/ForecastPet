import styles from "./Dots.module.scss";

const Dots = function () {
  return (
    <div className={styles["col-3"]}>
      <div className={styles.snippet} data-title="dot-bricks">
        <div className={styles.stage}>
          <div className={styles["dot-bricks"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Dots;
