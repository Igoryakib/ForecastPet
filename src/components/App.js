import React from "react";

import HomePage from "../pages/HomePage.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage.jsx";
import Options from "../pages/Options";
import NotFoundPage from "../pages/NotFoundPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
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
