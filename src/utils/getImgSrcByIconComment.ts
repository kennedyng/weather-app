import { WEATHER_CONTIONS_CODES } from "@/app/constants";

export const getImgSrcByWeatherCondition = (condition: string) => {
  if (WEATHER_CONTIONS_CODES[condition]) {
    return WEATHER_CONTIONS_CODES[condition];
  } else {
    return WEATHER_CONTIONS_CODES["clear"];
  }
};
