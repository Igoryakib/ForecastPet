import React, { useState, useEffect } from "react";
import styles from "./LangSwitcher.module.scss";
import classnames from "classnames";
import Vector from "../../static/Vector.svg";
import VectorEllipse from "../../static/VectorEllipse.svg";

const LangSwitcher = ({ setLang }) => {
  const [vector, setVector] = useState();
  const [langContainer, setLangContainer] = useState();
  const [wrapperLang, setWrapperLang] = useState();
  const [langEn, setLangEn] = useState();
  const [vectorEllipse, setVectorEllipse] = useState();
  const [langUk, setLangUk] = useState();
  useEffect(() => {
    setVector(document?.querySelector(`.${styles.vector}`));
    setLangContainer(document?.querySelector(`.${styles.changeLangContainer}`));
    setWrapperLang(document?.querySelector(`.${styles.wrapperLangUk}`));
    setLangEn(document?.querySelector(`.${styles.langEn}`));
    setVectorEllipse(document?.querySelector(`.${styles.vectorEllipse}`));
    setLangUk(document.querySelector(`.${styles.ukLang}`));
  }, []);
  const onClickVector = () => {
    langContainer?.classList.toggle(styles.heightContainer);
    wrapperLang?.classList.toggle(styles.borderUkLang);
    langEn?.classList.toggle(styles.opacityEn);
    vector?.classList.toggle(styles.vectorOpacity);
    vectorEllipse?.classList.toggle(styles.vectorEllipseOpacity);
  };
  const onClickLang = (event) => {
    if (event.target.alt === "icon") {
      onClickVector();
    } else {
      setLang(event.target.textContent === "укр" ? "uk" : "en");
      if (event.target.textContent === "укр") {
        langUk.textContent = "укр";
        langEn.textContent = "eng";
      } else {
        langUk.textContent = "eng";
        langEn.textContent = "укр";
      }
      langContainer?.classList.toggle(styles.heightContainer);
      wrapperLang?.classList.toggle(styles.borderUkLang);
      langEn?.classList.toggle(styles.opacityEn);
      vector?.classList.toggle(styles.vectorOpacity);
      vectorEllipse?.classList.toggle(styles.vectorEllipseOpacity);
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={styles.changeLangContainer}
        onClick={(event) => onClickLang(event)}
      >
        <div className={styles.wrapperLangUk}>
          <h4
            className={classnames(styles.selectOption, styles.ukLang)}
            type="uk"
          >
            укр
          </h4>
          <img className={styles.vector} src={Vector} alt="icon" />
        </div>
        <h4
          className={classnames(styles.selectOption, styles.langEn)}
          type="en"
        >
          eng
        </h4>
        <img className={styles.vectorEllipse} src={VectorEllipse} alt="icon" />
      </div>
    </div>
  );
};

export default LangSwitcher;
