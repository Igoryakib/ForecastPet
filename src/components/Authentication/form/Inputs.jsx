import { useEffect, useRef, useState } from "react";
import CtaButton from "../../small components/CtaButton/CtaButton";
import styles from "./Inputs.module.scss";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { getLanguage } from "../../../redux/selectors";
import handleInputsValidation from "../../../utils/handleInputsValidation";
import { handleSignUp } from "../../../services/apiSignup";
import { loginUser } from "../../../redux/action-operations";
import { useNavigate } from "react-router-dom";
import doesEmailExist from "../../../services/apiCheckEmail";

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
  signedUp,
  setSignedUp,
}) {
  // state for checkbox in the bottom of the form
  const [isAgree, setIsAgree] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const language = useSelector(getLanguage);
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(getUserData) ? true : false;

  const inputs = useRef(new Set());
  const checkbox = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    handleInputsValidation(
      isValid,
      setIsValid,
      inputs,
      name,
      password,
      email,
      (type = ""),
    );
    console.log("isValid = " + isValid);
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
    setIsLoading(true);
    const emailExists = await doesEmailExist(email);
    const data = {
      email: email,
      password: password,
      first_name: name,
    };
    if (isValid) {
      console.log("pre-entered handleSignUp");
      if (type === "signup" && !emailExists) {
        const data = await handleSignUp(email, password, name);
        console.log(data);
        if (data[0].id) {
          setSignedUp(true);
        }
      } else if (type === "signup" && emailExists) {
        handleInputsValidation(
          isValid,
          setIsValid,
          inputs,
          name,
          password,
          email,
          "alreadyExists",
        );
      } else if (type === "login") {
        await dispatch(loginUser(data)).then((response) => {
          console.log(response);
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
