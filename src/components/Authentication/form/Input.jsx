import React, { useRef } from "react";
import styles from "./Input.module.scss";
import "./InputsValidation.css";

const Input = function ({
  label = "label",
  type = "text",
  ref,
  placeholder = "",
  inputs,
}) {
  let addInput;
  addInput = (el) => el && inputs.current.add(el);

  return (
    <div>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        ref={addInput}
        placeholder={placeholder}
        required
      ></input>
    </div>
  );
};

export default Input;
