import React, { useState } from "react";
import styles from "./AuthWindow.module.scss";

import Sidebar from "./signup/sidebar/Sidebar";
import Form from "./signup/form/Form";

const AuthWindow = () => {
  const [activeFeedback, setActiveFeedback] = useState(1);

  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.close}></div>
      <div className={`grid ${styles.window}`}>
        <Sidebar
          setActiveFeedback={setActiveFeedback}
          activeFeedback={activeFeedback}
        />
        <Form />
      </div>
    </>
  );
};

export default AuthWindow;
