import { configureStore } from "@reduxjs/toolkit";
import userInputsReducer from "./features/userInputsSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { weatherApi } from "./services/weather";
export const store = configureStore({
  reducer: {
    userInputsReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  //   devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([weatherApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
