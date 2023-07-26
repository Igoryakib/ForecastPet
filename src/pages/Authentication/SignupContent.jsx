import { useState } from "react";
import Form from "../../components/Authentication/signup/form/Form";
import Sidebar from "../../components/Authentication/signup/sidebar/Sidebar";
import styles from "./SignupPage.module.scss";

const SignupPage = function ({ setSection }) {
  const [activeFeedback, setActiveFeedback] = useState(1);

  return (
    <>
      <Sidebar
        type="signup"
        setActiveFeedback={setActiveFeedback}
        activeFeedback={activeFeedback}
      />
      <Form type="signup" setSection={setSection} />
    </>
  );
};

export default SignupPage;
