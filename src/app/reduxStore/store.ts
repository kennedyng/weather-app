import { configureStore } from "@reduxjs/toolkit";
import userInputsReducer from "./features/userInputsSlice";
import { forecastApi } from "./services/forecast";
import { weatherApi } from "./services/weather";
export const store = configureStore({
  reducer: {
    userInputsReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
    [forecastApi.reducerPath]: forecastApi.reducer,
  },
  //   devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      weatherApi.middleware,
      forecastApi.middleware,
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
