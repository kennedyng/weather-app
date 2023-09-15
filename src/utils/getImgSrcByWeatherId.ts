import { WEATHER_CODES } from "@/app/constants";

export const getImgSrcByWeatherId = (weatherId: number) => {
  if (WEATHER_CODES[weatherId]) {
    return WEATHER_CODES[weatherId];
  }

  return WEATHER_CODES[800];
};
