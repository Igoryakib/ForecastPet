import React from 'react';
import { Link, useNavigate } from "react-router-dom";

import styles from "./Form.module.scss";
import FormHeader from "./FormHeader";
import Inputs from "./Inputs";
import WindowCloseBtn from "../../small components/WindowCloseBtn/WindowCloseBtn";

const Form = function ({ setSection, type }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <WindowCloseBtn />
      <FormHeader type={type} setSection={setSection} />
      <Inputs type={type} />
    </div>
  );
};

export default Form;
