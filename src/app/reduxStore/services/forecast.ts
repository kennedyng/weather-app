import { UNITS } from "@/app/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl: string = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

type ApiParams = {
  lat: string;
  lon: string;
  unit: string;
};
export const forecastApi = createApi({
  reducerPath: "forecastApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),

  endpoints: (builder) => ({
    getFiveDayForecast: builder.query<any, ApiParams>({
      query: ({ lat, lon, unit }) => {
        return {
          url: `/${lat},${lon}`,
          params: {
            key: process.env.NEXT_PUBLIC_VISUALCROSSING_API_KEY as string,
            unitGroup: unit !== UNITS.C ? "us" : UNITS.C,
          },
        };
      },
    }),
  }),
});

export const { useGetFiveDayForecastQuery } = forecastApi;
