import { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthWindow from "../components/Authentication/AuthWindow";

const LoginPage = () => {
  const [section, setSection] = useState("login");

  return (
    <>
      <AuthWindow  />
      <p> authentication page </p>
    </>
  );
};

export default LoginPage;
