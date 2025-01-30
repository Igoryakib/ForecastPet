import React from 'react';
import Form from "../../components/Authentication/form/Form";
import Sidebar from "../../components/Authentication/sidebar/Sidebar";

const LoginPage = function () {
  return (
    <>
      <Sidebar type="login" />
      <Form type="login" />
    </>
  );
};

export default LoginPage;
