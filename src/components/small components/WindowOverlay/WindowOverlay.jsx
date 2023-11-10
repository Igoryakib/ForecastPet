import { useNavigate } from "react-router-dom";
import styles from "./WindowOverlay.module.scss";
import { useEffect } from "react";
import classNames from "classnames";

const WindowOverlay = function ({route, position}) {
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") navigate(route);
    });
  }, []);

  return (
    <div
      onClick={() => navigate(route)}
      id="overlay"
      className={ position ? classNames(styles.overlay, styles.position) : styles.overlay}
    ></div>
  );
};

WindowOverlay.defaultProps = {
  route: '/'
};

export default WindowOverlay;
