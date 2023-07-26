import React from "react";

// home page
import HomePage from "../pages/Homepage/HomePage.jsx";

// routes
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// auth pages
import AuthPage from "../pages/Authentication/AuthPage.jsx";
import LoginContent from "../pages/Authentication/LoginContent.jsx";
import SignupContent from "../pages/Authentication/SignupContent.jsx";

// other pages/components
import Options from "../pages/Options";
import NotFoundPage from "../pages/NotFoundPage";
import Nav from "./Nav/Nav.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="auth" element={<AuthPage />}>
            <Route index element={<Navigate to="login" />} />
            <Route path="login" element={<LoginContent />} />
            <Route path="signup" element={<SignupContent />} />
          </Route>
          <Route path="options" element={<Options />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
