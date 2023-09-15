import { UNITS } from "@/app/constants";

export const getUnitySymbol = (unity: string) => {
  return unity === UNITS.F ? "F" : "C";
};
