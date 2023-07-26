import Heading from "../small components/Heading";
import Switcher from "../small components/Switcher";
import styles from "./FormHeader.module.scss";
import { useState } from "react";

const FormHeader = function ({type}) {


    return (
      <div className={styles.container}>
        <Heading>{type === 'signup' ? 'Зареєструйся' : 'Увійди в свій акаунт'}</Heading>
        <div className={styles.subheading}>
          <p>вже маєш акаунт?</p>
          <Switcher
            textArray={["Так", "Ні"]}
          />
        </div>
      </div>
    );
  }

export default FormHeader;
