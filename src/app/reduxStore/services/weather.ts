import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl: string = `https://api.openweathermap.org/data/2.5`;

type ApiParams = {
  lat: string;
  lon: string;
  unity: string;
};
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),

  endpoints: (builder) => ({
    getCurrentWeather: builder.query<any, ApiParams>({
      query: ({ lat, lon, unity }) => {
        return {
          url: "weather",
          params: {
            lat,
            lon,
            appid: process.env.NEXT_PUBLIC_OPENWHEATHER_API_KEY,
            units: unity,
          },
        };
      },
    }),

    getFiveDayForecast: builder.query<any, ApiParams>({
      query: ({ lat, lon, unity }) => {
        return {
          url: "forecast",
          params: {
            lat,
            lon,
            cnt: 5,
            appid: process.env.NEXT_PUBLIC_OPENWHEATHER_API_KEY,
            units: unity,
          },
        };
      },
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useGetFiveDayForecastQuery } =
  weatherApi;
