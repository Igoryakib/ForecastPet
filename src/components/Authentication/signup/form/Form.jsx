import { Link, useNavigate } from "react-router-dom";

import styles from "./Form.module.scss";
import FormHeader from "./FormHeader";
import Inputs from "./Inputs";

const Form = function ({ setSection, type }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <button className={styles.closeButton} onClick={() => navigate("/")}>
        &times;
      </button>
      <FormHeader type={type} setSection={setSection} />
      <Inputs type={type} />
    </div>
  );
};

export default Form;
