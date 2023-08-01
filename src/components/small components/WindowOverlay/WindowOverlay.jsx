import { useNavigate } from "react-router-dom";
import styles from "./WindowOverlay.module.scss";

const WindowOverlay = function () {
  const navigate = useNavigate()
  // document.querySelector('#overlay').addEventListener('click', () => {
  //   navigate('/')
  // })

  return <div id='overlay' className={styles.overlay}></div>;
};

export default WindowOverlay;
