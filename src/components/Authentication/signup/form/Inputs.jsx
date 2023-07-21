import CtaButton from "../small components/CtaButton";
import styles from "./Inputs.module.scss";

const Inputs = function () {
  return (
    <div>
      <form className={styles.container}>
        <div>
          <label className={styles.label}>Ім'я</label>
          <input className={styles.input} type="text"></input>
        </div>
        <div>
          <label className={styles.label}>Email</label>
          <input className={styles.input} type="Email"></input>
        </div>
        <div>
          <label className={styles.label}>Пароль</label>
          <input className={styles.input} type="password"></input>
        </div>
        <div className={styles.buttonBox}>
          <CtaButton
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Зареєструватися
          </CtaButton>
          <div className={styles.checkbox}>
            <input type="checkbox" />
            <p>даю згоду на обробку персональних даних</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
