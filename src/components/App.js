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
import Settings from "../pages/Settings/Settings.jsx";
import NotFoundPage from "../pages/NotFoundPage";
import Nav from "./Nav/Nav.jsx";
import routes from "../utils/routes.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={routes.authPage} element={<AuthPage />}>
            <Route index element={<Navigate to={routes.loginContent} />} />
            <Route path={routes.loginContent} element={<LoginContent />} />
            <Route path={routes.signupContent} element={<SignupContent />} />
          </Route>
          <Route path={routes.settingsPage} element={<Settings />} />
          <Route path={routes.notFoundPage} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
