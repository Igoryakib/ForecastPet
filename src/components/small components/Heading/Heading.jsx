import styles from "./Heading.module.scss";

const Heading = function ({ children }) {
  return <h2 className={styles.heading}>{children}</h2>;
};

export default Heading;
