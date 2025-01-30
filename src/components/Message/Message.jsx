import classNames from "classnames";
import styles from "./Message.module.scss";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import {
  getIsLoadingAirQuality,
  getIsLoadingCurrently,
  getIsLoadingDaily,
  getIsLoadingGeo,
  getIsLoadingHourly,
  getLanguage,
} from "../../redux/selectors";
import Dots from "./Dots";

const Message = function ({ color = "yellow", type = "loading" }) {
  const language = useSelector(getLanguage);

  // selectors
  const isLoadingHourly = useSelector(getIsLoadingHourly);
  const isLoadingCurrently = useSelector(getIsLoadingCurrently);
  const isLoadingDaily = useSelector(getIsLoadingDaily);
  const isLoadingGeo = useSelector(getIsLoadingGeo);
  const isLoadingAirQuality = useSelector(getIsLoadingAirQuality);
  const isLoading =
    isLoadingAirQuality ||
    isLoadingCurrently ||
    isLoadingDaily ||
    isLoadingDaily ||
    isLoadingGeo ||
    isLoadingHourly;

  // implementation of smooth transition between message element states
  const el = useRef();
  useEffect(() => {
    if (isLoading) {
      el.current.classList.remove("isClosed");
      el.current.classList.add("isOpen");
    } else {
      el.current.classList.remove("isOpen");
      el.current.classList.add("isClosed");
    }
  }, [isLoading]);

  return (
    <>
      <div ref={el} className={classNames(styles[color], styles.message)}>
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
    </>
  );
};

export default Message;
