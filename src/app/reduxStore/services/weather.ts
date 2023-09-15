import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl: string = `https://api.openweathermap.org/data/2.5`;
export const weatherApi = createApi({
  reducerPath: "weatherApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),

  endpoints: (builder) => ({
    getCurrentWeather: builder.query<any, { lat: string; lon: string }>({
      query: ({ lat, lon }) => {
        return {
          url: "weather",
          params: {
            lat,
            lon,
            appid: process.env.NEXT_PUBLIC_OPENWHEATHER_API_KEY,
          },
        };
      },
    }),
  }),
});

export const { useGetCurrentWeatherQuery } = weatherApi;
