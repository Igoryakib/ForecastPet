import classNames from "classnames";
import styles from "./Message.module.scss";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getLanguage } from "../../redux/selectors";
import Dots from "./Dots";

const Message = function ({ color = "yellow", type = "loading" }) {
  const language = useSelector(getLanguage);
  
  return (
    <>
      <div className={classNames(styles[color], styles.message)}>
        {type === "loading" ? <Dots /> : ""}
        <span>
          {type === "loading"
            ? language === "uk"
              ? "Завантаження..."
              : "Loading..."
            : ""}
        </span>
        <span>
          {type === "error" ? (language === "uk" ? "Помилка" : "Error") : ""}
        </span>
        <span>
          {type === "notFound"
            ? language === "uk"
              ? "Не знайдено"
              : "Not found"
            : ""}
        </span>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
};

export default Message;
