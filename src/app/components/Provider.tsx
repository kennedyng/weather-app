"use client";

import { DrawerProvider } from "../context";
import { Provider } from "react-redux";
import { store } from "../reduxStore/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <DrawerProvider>{children}</DrawerProvider>
    </Provider>
  );
}
