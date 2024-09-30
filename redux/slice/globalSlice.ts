import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { Appearance, DevSettings } from "react-native";

export interface GlobalState {
  deviceId: string;
  theme: "light" | "dark";
  language: string;
  timeForInactivity: number;
  initialRoute: string;
  reload: boolean;
  activeCurrency: string;
}

const initialState: GlobalState = {
  deviceId: "",
  theme: Appearance.getColorScheme() || "light",
  language: "en",
  timeForInactivity: 0,
  initialRoute: "",
  reload: false,
  activeCurrency: "USD",
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setDeviceId: (state, action: PayloadAction<string>) => {
      state.deviceId = action.payload;
    },

    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      const currentTheme = Appearance.getColorScheme();
      // const theme = currentTheme === 'light' ? 'dark' : 'light';
      // console.log('setTheme', theme, action.payload);
      // Appearance.setColorScheme(theme);
      state.theme = action.payload;
      // DevSettings.reload();
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setTimeForInactivity: (state, action: PayloadAction<number>) => {
      state.timeForInactivity = action.payload;
    },
    setInitialRoute: (state, action: PayloadAction<string>) => {
      state.initialRoute = action.payload;
    },
    setReloadRoute: (state, action: PayloadAction<boolean>) => {
      state.reload = action.payload;
    },
    setActiveCurrency: (state, action: PayloadAction<string>) => {
      state.activeCurrency = action.payload;
    },
  },
});

export const {
  setDeviceId,
  setTheme,
  setLanguage,
  setTimeForInactivity,
  setInitialRoute,
  setReloadRoute,
  setActiveCurrency,
} = globalSlice.actions;
export default globalSlice.reducer;
