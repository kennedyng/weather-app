"use client";

import { DrawerProvider } from "../context";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return <DrawerProvider>{children}</DrawerProvider>;
}
