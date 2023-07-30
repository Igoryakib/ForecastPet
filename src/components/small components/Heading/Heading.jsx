import styles from "./Heading.module.scss";

const Heading = function ({ children, size = "2.4rem" }) {
  return (
    <h2 className={styles.heading} style={{ fontSize: size }}>
      {children}
    </h2>
  );
};

export default Heading;
