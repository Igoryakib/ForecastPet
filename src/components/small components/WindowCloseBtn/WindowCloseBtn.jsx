import { useNavigate } from "react-router-dom";
import styles from "./WindowCloseBtn.module.scss";

const WindowCloseBtn = function ({route}) {
  const navigate = useNavigate();

  return (
    <button className={styles.closeButton} onClick={() => navigate(route)}>
      &times;
    </button>
  );
};

WindowCloseBtn.defaultProps = {
  route: '/'
};

export default WindowCloseBtn;
