import { UNITS } from "@/app/constants";

export const getUnitySymbol = (unit: string) => {
  return unit === UNITS.F ? "F" : "C";
};

export const getWindUnity = (unit: string) => {
  return unit === UNITS.F ? "mph" : "mps";
};

export const getMilesFromkm = (km: number) => {
  const miles = 0.621371 * km;
  return Math.floor(miles);
};
