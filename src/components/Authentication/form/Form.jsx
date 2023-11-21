import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./Form.module.scss";
import FormHeader from "./FormHeader";
import Inputs from "./Inputs";
import WindowCloseBtn from "../../small components/WindowCloseBtn/WindowCloseBtn";

// backend, supabase
// import { createClient } from "@supabase/supabase-js";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
//
import supabase from "../../../services/supabase";
import { handleSignUp } from "../../../services/apiSignup";
import { handleLogin } from "../../../services/apiLogin";
import { handleGetUser } from "../../../services/apiGetUser";

const Form = function ({ setSection, type }) {
  // const supabase = createClient(
  //   "https://bjdohmwiychliihmrkwf.supabase.co",
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZG9obXdpeWNobGlpaG1ya3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MDI4MDEsImV4cCI6MjAxNDM3ODgwMX0.y2C60-Ac2j7q6gW7-sU_qt829e4_jl7an_jCpJOzSyI",
  // );
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onSubmit = async function () {
    console.log(isValid);
    if (isValid) {
      if (type === "signup") await handleSignUp(email, password, name);
      else if (type === "login") await handleLogin(email, password);
      // handleGetUser().then(user => console.log(user))
    }
  };
  // const { user } = supabase.auth;
  // useEffect(() => {
  //   console.log(user);
  // }, [user])

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   console.log('submitted')

  //   const { error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //     data: {
  //       name: name,
  //       created_at: new Date().toISOString(),
  //     },
  //   })

  //   if (error) {
  //     alert(error.message)
  //   }
  // }

  // supabase.auth.onAuthStateChange(async (event, session) => {
  //   if (event === "SIGNED_IN" || event === "USER_UPDATED") {
  //     const { data, error } = await supabase
  //       .from("profiles")
  //       .select("*")
  //       .eq("user_uid", session.user.id);

  //     if (error) {
  //       console.error("Error fetching user profile:", error);
  //     } else if (data.length === 0) {
  //       await supabase
  //         .from("profiles")
  //         .insert([{ user_uid: session.user.id, email: session.user.email }]);
  //     }

  //     navigate("/");
  //     console.log(data);
  //   }
  // });

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
        isValid={isValid}
        setIsValid={setIsValid}
        onSubmit={onSubmit}
      />
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      {/* TODO */}
      <button onClick={async () => await supabase.auth.signOut()}>
        dadadkjajdajdjadjakd
      </button>
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
