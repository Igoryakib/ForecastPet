const handleInputsValidation = function (
  isValid,
  setIsValid,
  inputs,
  name,
  password,
  email,
  type,
) {
  const doShowError = type === "showError" || type === "wrongCredentials";

  inputs.current = [...inputs.current];
  inputs.current.map((el) => {
    const emailInput = email;

    const isEmailGood =
      emailInput.split("@")[0]?.length !== 0 &&
      emailInput.split("@")?.length === 2 &&
      emailInput.split("@")[1]?.length >= 3 &&
      emailInput.split("@")[1]?.includes(".") &&
      emailInput.split("@")[1]?.at(-1) !== "." &&
      emailInput.split("@")[1]?.split(".")[0].length !== 0;

    // some visual effect to any kind of validation if the type of validation is submission, otherwise, no UI error until user submits the form
    const errorUI = function () {
      console.log(doShowError);
      if (doShowError) {
        el.style.borderWidth = "1.6px";
        el.style.borderColor = "#D92B2B";
        el.classList.add("animated");
        const removeAnim = setTimeout(
          () => el.classList.remove("animated"),
          500,
          "",
        );
      }
    };

    // (initial/default) visual effect for only onMounted or value eligible input fields
    const initUI = function () {
      el.style.borderColor = "#777";
      el.style.borderWidth = "1.2px";
      el.parentElement.className = "";
    };

    if (type === "wrongCredentials") {
      errorUI();
      inputs.current[0].parentElement.classList.add("validate--credentials");
      return;
    }
    setIsValid(true);

    if (doShowError) {
      if (el && el.value === "") {
        errorUI();
        el.parentElement.classList.add("validate--empty");
        setIsValid(false);
      } else if (el && el.value !== "") {
        initUI();
      }
    }
    if (el?.type === "password" && password !== "" && password.length < 7) {
      if (doShowError) {
        errorUI();
        el.parentElement.classList.add("validate--short");
        setIsValid(false);
      }
    }
    if (el?.type === "email" && emailInput !== "" && !isEmailGood) {
      if (doShowError) {
        errorUI();
        el.parentElement.classList.add("validate--email");
      }
      setIsValid(false);
    }
  });
  inputs.current = new Set([...inputs.current]);
};

export default handleInputsValidation;
