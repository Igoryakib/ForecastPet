import React, { useEffect, useMemo, useState } from "react";
import "../scss/styles.scss";

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
import { temperatureUnit, weatherLoading } from "../redux/actions";
import Message from "./Message/Message";
import { store } from "../redux/store";
import ProfileContent from "../pages/Authentication/ProfileContent";

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector(getLanguage);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const idCoordsWatcher = navigator.geolocation.watchPosition((position) => {
    setLat(position.coords.latitude);
    setLon(position.coords.longitude);
  });

  const data = useMemo(function data(){
    return {
      lang: language || "uk",
      regionData: {
      lat: lat || 50.4501,
      lon: lon || 30.5234,
    },
}}, [language, lat, lon]);

 
  useEffect(() => {
    return () => navigator.geolocation.clearWatch(idCoordsWatcher);
  }, []);
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude);
  //     setLon(position.coords.longitude);
  //   });
  // }, []);
  useEffect(() => {
    dispatch(weatherLoading(true));
    dispatch(getDailyWeather(data));
    dispatch(getHourlyWeather(data));
    dispatch(getAirQuality(data));
    dispatch(getCurrentlyWeather(data));
    dispatch(getGeoDetails(data));
    dispatch(temperatureUnit("C"));
  }, [lat, lon, data, dispatch]);

  // console.log(store.getState().weatherData)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes.homePage}
            element={
              <>
                <Message
                  data-description="for loading state"
                  type="loading"
                  color="yellow"
                />
                <Outlet />
                <HomePage />
                <Nav />
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
              <Route path={routes.profilePage}  element={<ProfileContent/>}/>
            </Route>
          </Route>
          <Route path={routes.notFoundPage} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
