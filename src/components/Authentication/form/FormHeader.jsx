import Heading from "../../small components/Heading/Heading";
import Switcher from "../../small components/AuthSwitcher/Switcher";
import styles from "./FormHeader.module.scss";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getLanguage } from "../../../redux/selectors";

const FormHeader = function ({ type }) {
  const language = useSelector(getLanguage);

  return (
    <div className={styles.container}>
      <Heading>
        {type === "signup"
          ? language === "uk"
            ? "Зареєструйся"
            : "Sign up"
          : language === "uk"
            ? "Увійди в свій акаунт"
            : "Log into your account"}
      </Heading>
      <div className={styles.subheading}>
        <p>
          {language === "uk" ? "вже маєш акаунт?" : "already have an account?"}
        </p>
        <Switcher
          textArray={language === "uk" ? ["Так", "Ні"] : ["Yes", "No"]}
        />
      </div>
    </div>
  );
};

export default FormHeader;
