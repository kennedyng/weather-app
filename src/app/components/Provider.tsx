"use client";

import { DrawerProvider } from "../context";
import { Provider } from "react-redux";
import { store } from "../reduxStore/store";
import { CurrentLocationProvider } from ".";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CurrentLocationProvider>
        <DrawerProvider>{children}</DrawerProvider>
      </CurrentLocationProvider>
    </Provider>
  );
}
