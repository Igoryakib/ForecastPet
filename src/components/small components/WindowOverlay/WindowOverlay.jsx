import { useNavigate } from "react-router-dom";
import styles from "./WindowOverlay.module.scss";
import { useEffect } from "react";

const WindowOverlay = function () {
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') navigate('/')
    })
  }, [])

  return <div onClick={() => navigate('/')} id="overlay" className={styles.overlay}></div>;
};

export default WindowOverlay;
