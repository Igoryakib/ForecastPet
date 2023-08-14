import React, { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import {
  getDailyWeather,
  getHourlyWeather,
  getCurrentlyWeather,
  getGeoDetails,
  getAirQuality,
} from "../redux/action-operations";
import { getLanguage, getUnit, getError } from "../redux/selectors";

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
import { temperatureUnit } from "../redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const error = useSelector(getError);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
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
        dispatch(getGeoDetails(data));
        dispatch(getAirQuality(data));
        dispatch(temperatureUnit("C"));
      } else {
        const data = {
          lang: "uk",
          regionData: { lat: 1, lon: 9.5 },
        };
        dispatch(getDailyWeather(data));
        dispatch(getHourlyWeather(data));
        dispatch(getCurrentlyWeather(data));
        dispatch(getGeoDetails(data));
        dispatch(getAirQuality(data));
        dispatch(temperatureUnit("C"));
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.homePage}
            element={
              <>
                <Outlet />
                <HomePage />
                <Nav />
              </>
            }
          >
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
            <Route
              path={routes.settingsPage}
              element={
                <>
                  <Settings />
                </>
              }
            />
          </Route>
          <Route path={routes.notFoundPage} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
