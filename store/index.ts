import { combineReducers, configureStore } from "@reduxjs/toolkit";

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
import { TypedUseSelectorHook, useSelector } from "react-redux";
import globalSlice from "../redux/slice/globalSlice";
import storage from "../utils/storage";

const registrationPersistConfig = {
  key: "registration",
  storage,
  whitelist: ["userId", "currentPhase"],
};

const authenticationConfig = {
  key: "authentication",
  storage,
  whitelist: ["user", "fcmToken", "pinCode"],
};

const cardConfig = {
  key: "card",
  storage,
  whitelist: ["cardDetails"],
};

const notificationConfig = {
  key: "notifications",
  storage,
  whitelist: ["notifications", "redDot"],
};

const preferencesConfig = {
  key: "preferences",
  storage,
  whitelist: ["preferences"],
};

const globalConfig = {
  key: "global",
  storage,
  whitelist: [
    "deviceId",
    "language",
    "theme",
    "timeForInactivity",
    "activeCurrency",
  ],
};

const rootReducer = combineReducers({
  global: persistReducer(globalConfig, globalSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
