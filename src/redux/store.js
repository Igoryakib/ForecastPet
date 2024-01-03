// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { weatherReducers, userReducers } from "./reducers";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const weatherPersistConfig = {
//   key: "weather",
//   storage,
// };
// const userPersistConfig = {
//   key: "user",
//   storage,
// };

// const store = configureStore({
//   reducer: {
//     weatherData: persistReducer(weatherPersistConfig, weatherReducers),
//     user: persistReducer(userPersistConfig, userReducers),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });
// const persistor = persistStore(store);
// export { store, persistor };
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { weatherReducers, userReducers } from "./reducers";

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    // Handle potential errors here
  }
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const weatherPersistConfig = {
  key: "weather",
  storage,
};
const userPersistConfig = {
  key: "user",
  storage,
};

// Load persisted state from local storage
const persistedWeatherState = loadState()?.weatherData;
const persistedUserState = loadState()?.user;

const store = configureStore({
  reducer: {
    weatherData: persistReducer(weatherPersistConfig, weatherReducers),
    user: persistReducer(userPersistConfig, userReducers),
  },
  preloadedState: {
    weatherData: persistedWeatherState,
    user: persistedUserState,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// Subscribe to store changes to persist state to local storage
store.subscribe(() => {
  const state = store.getState();
  saveState({ weatherData: state.weatherData, user: state.user });
});

const persistor = persistStore(store);

export { store, persistor };
