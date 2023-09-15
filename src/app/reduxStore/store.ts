import { configureStore } from "@reduxjs/toolkit";
import userInputsReducer from "./features/userInputsSlice";
export const store = configureStore({
  reducer: {
    userInputsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
