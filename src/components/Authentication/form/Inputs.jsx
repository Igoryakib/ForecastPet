import { useEffect, useRef, useState } from "react";
import CtaButton from "../../small components/CtaButton/CtaButton";
import styles from "./Inputs.module.scss";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage, getUserData } from "../../../redux/selectors";
import handleInputsValidation from "../../../utils/handleInputsValidation";
import { handleSignUp } from "../../../services/apiSignup";
import { loginUser } from "../../../redux/action-operations";
import { Navigate } from "react-router-dom";

const Inputs = function ({
  type,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  setIsLoading,
  isLoggedIn = false,
  // isValid,
  // setIsValid,
  // onSubmit,
}) {
  // state for checkbox in the bottom of the form
  const [isAgree, setIsAgree] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const language = useSelector(getLanguage);
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(getUserData) ? true : false;

  const inputs = useRef(new Set());
  const checkbox = useRef();

  useEffect(() => {
    handleInputsValidation(isValid, setIsValid, inputs, name, password, email);
  }, [name, email, password]);

  // first, onClick()
  const onClick = function (e) {
    e.preventDefault();
    handleInputsValidation(
      isValid,
      setIsValid,
      inputs,
      name,
      password,
      email,
      "showError",
    );
  };

  const onSubmit = async function onSubmit() {
    const timeout = setTimeout(5000);
    setIsLoading(true);
    const data = {
      email: email,
      password: password,
    };
    if (isValid) {
      console.log(type);
      if (type === "signup") await handleSignUp(email, password, name).then((response) => {

      });
      else if (type === "login") {
        await dispatch(loginUser(data)).then((response) => {
          if (!response.payload)
            handleInputsValidation(
              isValid,
              setIsValid,
              inputs,
              name,
              password,
              email,
              "wrongCredentials",
            );
        });
        console.log("is logged in = " + isLoggedIn);
      }
    }
    setIsLoading(false);
    if (isLoggedIn) return <Navigate to="../profile" />;
  };

  return (
    <form className={styles.container}>
      {type === "signup" ? (
        <Input
          label={language === "uk" ? "Ім'я" : "Name"}
          onChange={(e) => setName(e.target.value)}
          inputs={inputs}
          type="text"
        />
      ) : (
        ""
      )}
      <Input
        label="Email"
        inputs={inputs}
        type="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        label={language === "uk" ? "Пароль" : "Password"}
        inputs={inputs}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div
        className={`flex-justify-left ${styles.buttonBox}`}
        style={type === "login" ? { width: "80%" } : {}}
      >
        <CtaButton
          onClick={onClick}
          onSubmit={onSubmit}
          isValid={isValid}
          isDisabled={!isAgree}
          type={type}
        >
          {type === "signup"
            ? language === "uk"
              ? "Зареєструватися"
              : "Sign up"
            : language === "uk"
              ? "Увійти"
              : "Log in"}
        </CtaButton>
        {type === "signup" ? (
          <div
            className={styles.checkbox}
            onClick={(e) => {
              setIsAgree((isAgree) => !isAgree);
              checkbox.current.checked = !checkbox.current.checked;
            }}
          >
            <input
              type="checkbox"
              ref={checkbox}
              onChange={() =>
                (checkbox.current.checked = !checkbox.current.checked)
              }
            />
            <p>
              {language === "uk"
                ? "даю згоду на обробку персональних даних"
                : "allow to process my personal data"}
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default Inputs;
