const handleInputsValidation = function (
  isValid,
  setIsValid,
  inputs,
  name,
  password,
  email,
) {
  setIsValid(true);
  inputs.current = [...inputs.current];
  inputs.current.map((el) => {
    // const emailInput = inputs.current.filter((i) => i.type === "email")[0];
    const emailInput = email;

    const isEmailGood =
      emailInput.split("@")[0]?.length !== 0 &&
      emailInput.split("@")?.length === 2 &&
      emailInput.split("@")[1]?.length >= 3 &&
      emailInput.split("@")[1]?.includes(".") &&
      emailInput.split("@")[1]?.at(-1) !== "." &&
      emailInput.split("@")[1]?.split(".")[0].length !== 0;

    // some visual effect to any kind of validation
    const errorUI = function () {
      el.style.borderWidth = "1.6px";
      el.style.borderColor = "#D92B2B";
      el.classList.add("animated");
      const removeAnim = setTimeout(
        () => el.classList.remove("animated"),
        500,
        "",
      );
    };
    // (initial/default) visual effect for only onMounted or value eligible input fields
    const initUI = function () {
      el.style.borderColor = "#777";
      el.style.borderWidth = "1.2px";
      el.parentElement.className = "";
    };

    if (el && el.value === "") {
      errorUI();
      setIsValid(false);
      el.parentElement.classList.add("validate--empty");
    } else if (el && el.value !== "") {
      initUI();
    }

    // if (el?.type === "password" && el.value !== "" && el.value.length < 7) {
    //   errorUI();
    //   setIsValid(false);
    //   el.parentElement.classList.add("validate--short");
    // }
    if (el?.type === "password" && password !== "" && password.length < 7) {
      errorUI();
      setIsValid(false);
      el.parentElement.classList.add("validate--short");
    }
    // if (el?.type === "email" && el.value !== "" && !isEmailGood) {
    //   errorUI();
    //   setIsValid(false);
    //   el.parentElement.classList.add("validate--email");
    // }
    if (el?.type === "email" && emailInput !== "" && !isEmailGood) {
      errorUI();
      setIsValid(false);
      el.parentElement.classList.add("validate--email");
    }
  });
  inputs.current = new Set([...inputs.current]);
};

export default handleInputsValidation;
