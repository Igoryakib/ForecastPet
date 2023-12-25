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
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signOutUser } from "../../../redux/action-operations";
import { getUserData } from "../../../redux/selectors";
import { Backdrop, CircularProgress } from "@mui/material";
import SuccessMessage from "../../SuccessMessage/SuccessMessage";

const Form = function ({ setSection, type }) {

  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useSelector(getUserData) ? true : false;

  return (
    <div className={styles.container}>
      <WindowCloseBtn />
      {signedUp ? (
        <SuccessMessage />
      ) : (
        <>
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
            signedUp={signedUp}
            setSignedUp={setSignedUp}
          />
        </>
      )}
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
      {/* button to sign out */}
      {/* <button onClick={() => dispatch(signOutUser())} className={styles.tempo}>
        signout
      </button> */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
    </div>
  );
};

export default Form;
