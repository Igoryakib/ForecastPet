import { useState } from "react";
import { Outlet } from "react-router-dom";
import AuthWindow from "../components/Authentication/AuthWindow";
import HomePage from "./Homepage/HomePage";

const LoginPage = () => {
  const [section, setSection] = useState("login");

  return (
    <>
      <HomePage />
      <AuthWindow />
    </>
  );
};

export default LoginPage;
