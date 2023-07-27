import { useState } from "react";
import CtaButton from "../../small components/CtaButton/CtaButton";
import styles from "./Inputs.module.scss";

const Inputs = function ({ type }) {
  const [isAgree, setIsAgree] = useState(false);

  return (
    <form className={styles.container}>
      {type === "signup" ? (
        <div>
          <label className={styles.label}>Ім'я</label>
          <input className={styles.input} type="text"></input>
        </div>
      ) : (
        ""
      )}
      <div>
        <label className={styles.label}>Email</label>
        <input className={styles.input} type="Email"></input>
      </div>
      <div>
        <label className={styles.label}>Пароль</label>
        <input className={styles.input} type="password"></input>
      </div>
      <div className={`flex-justify-left ${styles.buttonBox}`}>
        <CtaButton
          onClick={(e) => {
            e.preventDefault();
          }}
          isDisabled={!isAgree}
          type={type}
        >
          {type === "signup" ? "Зареєструватися" : "Увійти"}
        </CtaButton>
        {type === "signup" ? (
          <div className={styles.checkbox}>
            <input type="checkbox" onChange={() => setIsAgree((is) => !is)} />
            <p>даю згоду на обробку персональних даних</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Inputs;
