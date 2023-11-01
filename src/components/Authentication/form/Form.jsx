import { Link, useNavigate } from "react-router-dom";

import styles from "./Form.module.scss";
import FormHeader from "./FormHeader";
import Inputs from "./Inputs";
import WindowCloseBtn from "../../small components/WindowCloseBtn/WindowCloseBtn";

// backend, supabase
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
const supabase = createClient(
  "https://bjdohmwiychliihmrkwf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZG9obXdpeWNobGlpaG1ya3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MDI4MDEsImV4cCI6MjAxNDM3ODgwMX0.y2C60-Ac2j7q6gW7-sU_qt829e4_jl7an_jCpJOzSyI",
);
//

const Form = function ({ setSection, type }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <WindowCloseBtn />
      {/* <FormHeader type={type} setSection={setSection} /> */}
      {/* <Inputs type={type} /> */}
      <Auth
        supabaseClient={supabase}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#E98540",
                brandAccent: "#D16D28",
              },
            },
          },
        }}
        providers={[]}
      />
    </div>
  );
};

export default Form;
