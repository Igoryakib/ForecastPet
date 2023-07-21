import React from "react";

import HomePage from "../pages/Homepage/HomePage.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage.jsx";
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
          <Route path="authentication" element={<AuthPage />} />
          <Route path="options" element={<Options />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
