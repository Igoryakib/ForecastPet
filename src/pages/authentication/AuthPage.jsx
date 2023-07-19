import { useState } from "react";
import { Outlet } from "react-router-dom";

const LoginPage = () => {
  const [section, setSection] = useState('login')

  return (
    <>
      <p> authentication page </p>
    </>
  
    )
}

export default LoginPage;
