import Heading from "../small components/Heading";
import Switcher from "../small components/Switcher";
import styles from "./FormHeader.module.scss";
import { useState } from "react";

const FormHeader = function () {
  const [isClient, setIsClient] = useState(false);

  return (
    <div className={styles.container}>
      <Heading>{isClient ? "Увійди в свій акаунт" : "Зареєструйся"}</Heading>
      <div className={styles.subheading}>
        <p>вже маєш акаунт?</p>
        <Switcher
          value={isClient}
          setValue={setIsClient}
          textArray={["Так", "Ні"]}
        />
      </div>
    </div>
  );
};

export default FormHeader;
