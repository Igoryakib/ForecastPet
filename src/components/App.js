import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
  getGeoDetails,
  getAirQuality,
} from "../redux/action-operations";
import { getLanguage, getUnit, getIsLoading } from "../redux/selectors";

// home page
import HomePage from "../pages/Homepage/HomePage.jsx";

// routes
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

// auth pages
import AuthPage from "../pages/Authentication/AuthPage.jsx";
import LoginContent from "../pages/Authentication/LoginContent.jsx";
import SignupContent from "../pages/Authentication/SignupContent.jsx";

// other pages/components
import Settings from "../pages/Settings/Settings.jsx";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.jsx";
import Nav from "./Nav/Nav.jsx";
import routes from "../utils/routes.js";
import { temperatureUnit, weatherLanguage, weatherLoading } from "../redux/actions";
import { store } from "../redux/store";
import Message from "./Message/Message";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(weatherLoading(true));
    console.log(navigator.geolocation);
    const data = {
      lang: language || "uk",
      regionData: {
        lat: 50.4501,
        lon: 30.5234,
      },
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        data.regionData.lat = position.coords.latitude;
        data.regionData.lon = position.coords.longitude;
      });
    } 
    // else {
    //   data.regionData.lat = 50.4501;
    //   data.regionData.lon = 30.5234;
    // }
    console.log(data.regionData.lat, data.regionData.lon);
    dispatch(getDailyWeather(data));
    dispatch(getHourlyWeather(data));
    dispatch(getCurrentlyWeather(data));
    dispatch(getAirQuality(data));
    dispatch(getGeoDetails(data));
    dispatch(temperatureUnit("C"));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.homePage}
            element={
              <>
                {!isLoading ? (
                  <>
                    <Outlet />
                    <HomePage />
                    <Nav />
                  </>
                ) : (
                  <Message />
                )}
              </>
            }
          ></Route>
          <Route
            path={routes.settingsPage}
            element={
              <>
                <Settings />
              </>
            }
          />
          <Route path={routes.notFoundPage} element={<NotFoundPage />} />
          <Route
            path={routes.authPage}
            element={
              <>
                <AuthPage />
              </>
            }
          >
            <Route index element={<Navigate to={routes.loginContent} />} />
            <Route path={routes.loginContent} element={<LoginContent />} />
            <Route path={routes.signupContent} element={<SignupContent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
