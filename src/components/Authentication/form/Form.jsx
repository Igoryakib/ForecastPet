import { Link, useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import styles from "./Form.module.scss";
import FormHeader from "./FormHeader";
import Inputs from "./Inputs";
import WindowCloseBtn from "../../small components/WindowCloseBtn/WindowCloseBtn";

// backend, supabase
// import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
//
// import supabase from "../../../services/supabase";
import { handleSignUp } from "../../../services/apiSignup";
import { handleLogin } from "../../../services/apiLogin";
import { handleGetUser } from "../../../services/apiGetUser";
import CtaButton from "../../small components/CtaButton/CtaButton";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signOutUser } from "../../../redux/action-operations";
import { getUserData } from "../../../redux/selectors";
import { Backdrop, CircularProgress } from "@mui/material";
import handleInputsValidation from "../../../utils/handleInputsValidation";

const Form = function ({ setSection, type }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(getUserData) ? true : false;

  return (
    <div className={styles.container}>
      <WindowCloseBtn />
      <FormHeader type={type} setSection={setSection} />
      <Inputs
        type={type}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        // isValid={isValid}
        // setIsValid={setIsValid}
        // onSubmit={onSubmit}
        setIsLoading={setIsLoading}
        isLoggedIn={isLoggedIn}
      />
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 10,
          borderRadius: "2rem",
          width: "100%",
          zIndex: "9",
        }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      <button onClick={() => dispatch(signOutUser())}>signout</button>
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* {user ? "you are logged in" :
      <Auth
        onAuthSuccess={() => navigate('/')}
        supabaseClient={supabase}
        onSubmit={handleSubmit}
        localization={{
          variables: {
            sign_in: {
              email_label: 'Your email address',
              password_label: 'Your password',
              email_input_placeholder: "example@domain.com",
              password_input_placeholder: "**********",
            },
            sign_up: {
              email_label: 'Your email address',
              password_label: 'Create your strong password',
              email_input_placeholder: "example@domain.com",
              password_input_placeholder: "**********",
            },
          },
        }}
        appearance={{
          theme: ThemeSupa,
          style: {
            // button: {fontWeight: "600", fontSize: "2rem", margin: "1rem 0"},
            container: {position: "relative"},
            message: {position: "absolute", left: "50%", bottom: "15%", transform: "translateX(50%)"},
            // label: {fontSize: "2rem", fontWeight: "500", color: "#999", margin: ".6rem 0"}
          },
          variables: {
            default: {
              colors: {
                brand: "#E98540",
                brandAccent: "#D16D28",
              },
              space: {
                buttonPadding: "1.2rem"
              },
              fontSizes: {
                // baseLabelSize: "2rem"
              },
              fonts: {
                bodyFontFamily: "Montserrat, sans-serif",
                buttonFontFamily: "Montserrat, sans-serif",
                inputFontFamily: "Montserrat, sans-serif",
                labelFontFamily: "Montserrat, sans-serif",
              },
              radii: {
                borderRadiusButton: ".64rem",
                // buttonBorderRadius: '1.2rem',
                inputBorderRadius: ".8rem",
              },
              borderWidths: {
                buttonBorderWidth: 0,
              },
            },
          },
        }}
        additionalFields={[
        {
          id: 'name',
          name: 'name',
          placeholder: 'Anton Solianyk',
          type: 'text',
          required: true,
          onChange: (e) => setName(e.target.value),
        },
      ]}
        providers={[]}
      /> } */}
    </div>
  );
};

export default Form;
