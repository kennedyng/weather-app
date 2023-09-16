"use client";
import React, { ReactNode, useEffect } from "react";
import { useGetCurrentWeatherQuery } from "../reduxStore/services/weather";
import { setLocation } from "../reduxStore/features/userInputsSlice";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../reduxStore/hooks";

interface Props {
  children: ReactNode;
}
const CurrentLocationProvider: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { location, unit } = useAppSelector((state) => state.userInputsReducer);

  const { isLoading, isFetching, data, error } = useGetCurrentWeatherQuery({
    lat: String(location.lat),
    lon: String(location.lon),
    unity: unit,
  });

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
  }, [location]);
  return <>{children}</>;
};

export default CurrentLocationProvider;
