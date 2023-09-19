import {
  ClearIcon,
  CloudBgIcon,
  hailIcon,
  heavyCloundIcon,
  heavyRainIcon,
  lightCloudIcon,
  lightRainIcon,
  showerICon,
  sleetICon,
  snowIcon,
  thunderstorm,
} from "@/asserts";
import { StaticImageData } from "next/image";

export const UNITS = {
  F: "imperial",
  C: "metric",
};

type Icon = StaticImageData;

export const WEATHER_CODES: Record<number, Icon> = {
  200: lightRainIcon,
  201: thunderstorm,
  202: thunderstorm,
  210: thunderstorm,
  211: thunderstorm,
  212: thunderstorm,
  221: thunderstorm,
  230: showerICon,
  231: showerICon,
  232: showerICon,

  300: showerICon,
  301: lightRainIcon,
  302: lightRainIcon,
  310: showerICon,
  311: showerICon,
  312: lightRainIcon,
  313: lightRainIcon,
  314: heavyRainIcon,
  321: showerICon,

  500: lightRainIcon,
  501: lightRainIcon,
  502: heavyRainIcon,
  503: heavyRainIcon,
  504: heavyRainIcon,
  511: sleetICon,
  520: lightRainIcon,
  521: showerICon,
  522: heavyRainIcon,
  531: lightRainIcon,

  600: hailIcon,
  601: snowIcon,
  602: snowIcon,
  611: sleetICon,
  612: sleetICon,
  613: sleetICon,
  615: sleetICon,
  616: sleetICon,
  620: hailIcon,
  621: hailIcon,
  622: hailIcon,

  701: heavyCloundIcon,
  711: heavyCloundIcon,
  721: heavyCloundIcon,
  731: heavyCloundIcon,
  741: heavyCloundIcon,
  751: heavyCloundIcon,
  761: heavyCloundIcon,
  762: heavyCloundIcon,
  771: heavyCloundIcon,
  781: heavyCloundIcon,

  800: ClearIcon,
  801: heavyCloundIcon,
  802: lightCloudIcon,
  803: lightCloudIcon,
  804: lightCloudIcon,
};

const WEATHER = {
  Clear: ClearIcon,
};
