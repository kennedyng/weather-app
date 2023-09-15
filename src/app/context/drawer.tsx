"use client";

import React, { createContext, useContext, useState } from "react";
interface ContextType {
  open: boolean | true | false;
  toggle: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const DrawerContext = createContext<ContextType | null>(null);

interface Props {
  children: React.ReactNode;
}
const DrawerProvider: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const openDrawer = () => {
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
  };
  return (
    <DrawerContext.Provider
      value={{
        open,
        toggle,
        openDrawer,
        closeDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawer = () => useContext(DrawerContext) as ContextType;
export default DrawerProvider;
