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

const store = configureStore({
  reducer: {
    weatherData: persistReducer(weatherPersistConfig, weatherReducers),
    user: persistReducer(userPersistConfig, userReducers),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);
export { store, persistor };
