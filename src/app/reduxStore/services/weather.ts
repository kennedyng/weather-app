import { CurrentWeatherModel } from "@/app/models/CurrentWeatherModel";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl: string = `https://api.openweathermap.org`;

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
    getCurrentWeather: builder.query<CurrentWeatherModel, ApiParams>({
      query: ({ lat, lon, unity }) => {
        return {
          url: "data/2.5/weather",
          params: {
            lat,
            lon,
            appid: process.env.NEXT_PUBLIC_OPENWHEATHER_API_KEY,
            units: unity,
          },
        };
      },
    }),

    searchLocation: builder.query<any, { searchQuery: string }>({
      query: ({ searchQuery }) => {
        return {
          url: "geo/1.0/direct",
          params: {
            q: searchQuery,
            limit: 5,
            lang: "en",
            appid: process.env.NEXT_PUBLIC_OPENWHEATHER_API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCurrentWeatherQuery, useSearchLocationQuery } = weatherApi;
