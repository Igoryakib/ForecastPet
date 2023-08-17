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
import {
  getLanguage,
  getUnit,
  getIsLoading,
  getIsLoadingHourly,
  getIsLoadingCurrently,
  getIsLoadingDaily,
  getIsLoadingGeo,
  getIsLoadingAirQuality,
} from "../redux/selectors";

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
import {
  temperatureUnit,
  weatherLoading,
} from "../redux/actions";
import { store } from "../redux/store";
import Message from "./Message/Message";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const isLoadingHourly = useSelector(getIsLoadingHourly);
  const isLoadingCurrently = useSelector(getIsLoadingCurrently);
  const isLoadingDaily = useSelector(getIsLoadingDaily);
  const isLoadingGeo = useSelector(getIsLoadingGeo);
  const isLoadingAirQuality = useSelector(getIsLoadingAirQuality);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  navigator.geolocation.getCurrentPosition((position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });
  const data = {
    lang: language || "uk",
    regionData: {
      lat: lat || 50.4501,
      lon: lon || 30.5234,
    },
  };
  useEffect(() => {
    dispatch(weatherLoading(true));
    dispatch(getDailyWeather(data));
    dispatch(getHourlyWeather(data));
    dispatch(getAirQuality(data));
    dispatch(getCurrentlyWeather(data));
    dispatch(getGeoDetails(data));
    dispatch(temperatureUnit("C"));
  }, [lat, lon]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.homePage}
            element={
              <>
                {isLoadingHourly ||
                  isLoadingCurrently ||
                  isLoadingDaily ||
                  isLoadingGeo ||
                  (isLoadingAirQuality && <Message />)}
                {!isLoadingHourly &&
                  !isLoadingCurrently &&
                  !isLoadingDaily &&
                  !isLoadingGeo &&
                  !isLoadingAirQuality && (
                    <>
                      <Outlet />
                      <HomePage />
                      <Nav />
                    </>
                  )}
              </>
            }
          >
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
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
