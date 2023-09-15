import { WEATHER_CODES } from "@/app/constants";
import { StaticImageData } from "next/image";

const getImgSrcByWeatherId = (weatherId: number) => {
  console.log(WEATHER_CODES[weatherId]);
};
