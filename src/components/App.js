import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
} from "../redux/action-operations";
import { getLanguage } from "../redux/selectors";

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
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import Nav from "./Nav/Nav.jsx";
import routes from "../utils/routes.js";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      const data = {
        lang: language,
        regionData: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        },
      };
      dispatch(getDailyWeather(data));
      dispatch(getHourlyWeather(data));
      dispatch(getCurrentlyWeather(data));
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        {/* <Nav /> */}
        <Routes>
          <Route
            index
            path={routes.homePage}
            element={
              <>
                <Nav />
                <HomePage />
              </>
            }
          />
          <Route
            path={routes.authPage}
            element={
              <>
                <Nav />
                <AuthPage />
              </>
            }
          >
            <Route index element={<Navigate to={routes.loginContent} />} />
            <Route path={routes.loginContent} element={<LoginContent />} />
            <Route path={routes.signupContent} element={<SignupContent />} />
          </Route>
          <Route
            path={routes.settingsPage}
            element={
              <>
                <Nav />
                <Settings />
              </>
            }
          />
          <Route path={routes.notFoundPage} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
