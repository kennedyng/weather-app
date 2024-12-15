"use client";
import React, { ReactNode, useEffect } from "react";
import { toast } from "react-toastify";
import { setLocation } from "../reduxStore/features/userInputsSlice";
import { useAppDispatch } from "../reduxStore/hooks";

interface Props {
  children: ReactNode;
}
const CurrentLocationProvider: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) =>
        dispatch(
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        )
      );
    } else {
      toast.warn("Geolocation is not supported by this browser");
    }
  }, []);
  return <>{children}</>;
};

export default CurrentLocationProvider;
