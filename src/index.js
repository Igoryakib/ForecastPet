import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import App from "./components/App";
import "./scss/styles.scss";

// backend, supabase
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
const supabase = createClient(
  "https://bjdohmwiychliihmrkwf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqZG9obXdpeWNobGlpaG1ya3dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4MDI4MDEsImV4cCI6MjAxNDM3ODgwMX0.y2C60-Ac2j7q6gW7-sU_qt829e4_jl7an_jCpJOzSyI",
);
//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
