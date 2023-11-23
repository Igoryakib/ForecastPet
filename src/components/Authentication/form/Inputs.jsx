import { useEffect, useRef, useState } from "react";
import CtaButton from "../../small components/CtaButton/CtaButton";
import styles from "./Inputs.module.scss";
import Input from "./Input";
import { useSelector } from "react-redux";
import { getLanguage } from "../../../redux/selectors";
import handleInputsValidation from "../../../utils/handleInputsValidation";

const Inputs = function ({
  type,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  isValid,
  setIsValid,
  onSubmit,
}) {
  // state for checkbox in the bottom of the form
  const [isAgree, setIsAgree] = useState(false);
  const language = useSelector(getLanguage);

  const inputs = useRef(new Set());
  const checkbox = useRef();

  // ⭕️⭕️⭕️⭕️⭕️ Caution, to much unclear code below ⭕️⭕️⭕️⭕️⭕️⭕️
  //////////////////////////////////////////
  //////////// FORM VALIDATION /////////////
  //////////////////////////////////////////
  // function for validation UI change
  // const handleInputsValidation = function () {
  //   setIsValid(true);
  //   inputs.current = [...inputs.current];
  //   inputs.current.map((el) => {
  //     const emailInput = inputs.current.filter((i) => i.type === "email")[0];

  //     const isEmailGood =
  //       emailInput?.value.split("@")[0].length !== 0 &&
  //       emailInput?.value.split("@").length === 2 &&
  //       emailInput?.value.split("@")[1].length >= 3 &&
  //       emailInput?.value.split("@")[1].includes(".") &&
  //       emailInput?.value.split("@")[1].at(-1) !== "." &&
  //       emailInput?.value.split("@")[1].split(".")[0].length !== 0;

  //     // some visual effect to any kind of validation
  //     const errorUI = function () {
  //       el.style.borderWidth = "1.6px";
  //       el.style.borderColor = "#D92B2B";
  //       el.classList.add("animated");
  //       const removeAnim = setTimeout(
  //         () => el.classList.remove("animated"),
  //         500,
  //         "",
  //       );
  //     };
  //     // (initial/default) visual effect for only onMounted or value eligible input fields
  //     const initUI = function () {
  //       el.style.borderColor = "#777";
  //       el.style.borderWidth = "1.2px";
  //       el.parentElement.className = "";
  //     };

  //     if (el && el.value === "") {
  //       errorUI();
  //       setIsValid(false);
  //       el.parentElement.classList.add("validate--empty");
  //     } else if (el && el.value !== "") {
  //       initUI();
  //     }

  //     if (el?.type === "password" && el.value !== "" && el.value.length < 7) {
  //       errorUI();
  //       setIsValid(false);
  //       el.parentElement.classList.add("validate--short");
  //     }
  //     if (el?.type === "email" && el.value !== "" && !isEmailGood) {
  //       errorUI();
  //       setIsValid(false);
  //       el.parentElement.classList.add("validate--email");
  //     }
  //   });
  //   inputs.current = new Set([...inputs.current]);
  //   console.log(isValid)
  // };

  //////////////////////////////////////////
  //////////////////////////////////////////
  //////////////////////////////////////////
  //////////////////////////////////////////


  // first, onClick()
  const onClick = function (e) {
    e.preventDefault();
    handleInputsValidation(isValid, setIsValid, inputs, name, password, email);
  };

  // second, onSubmit in useEffect
  useEffect(() => {
    if (isValid) onSubmit();
  }, [isValid, onSubmit]);


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
      <div className={`flex-justify-left ${styles.buttonBox}`}>
        <CtaButton
          onClick={onClick}
          onSubmit={() => {}}
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
