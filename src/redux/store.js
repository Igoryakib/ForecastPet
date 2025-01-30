import { configureStore } from "@reduxjs/toolkit";
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
import weatherReducers from "./reducers";

const weatherPersistConfig = {
  key: "weather",
  storage,
};

const store = configureStore({
  reducer: {
    weatherData: persistReducer(weatherPersistConfig, weatherReducers),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === "development",
});
const persistor = persistStore(store);
export { store, persistor };
