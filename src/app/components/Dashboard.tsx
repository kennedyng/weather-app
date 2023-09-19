"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  AirePressureCard,
  HumidityCard,
  RoundedButton,
  VisibilityCard,
  WeatherCard,
  WindStatuCard,
} from ".";
import { container, item } from "../amin";
import { UNITS } from "../constants";
import {
  setUnitToCelsius,
  setUnitToKelvin,
} from "../reduxStore/features/userInputsSlice";
import { useAppDispatch, useAppSelector } from "../reduxStore/hooks";
import { useGetFiveDayForecastQuery } from "../reduxStore/services/forecast";
import { useGetCurrentWeatherQuery } from "../reduxStore/services/weather";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const handleCelsiusClick = () => {
    dispatch(setUnitToCelsius());
  };
  const handleFahrenheitClick = () => {
    dispatch(setUnitToKelvin());
  };

  const { location, unit } = useAppSelector((state) => state.userInputsReducer);
  const currentWeatherQuery = useGetCurrentWeatherQuery({
    lat: String(location.lat),
    lon: String(location.lon),
    unity: unit,
  });

  const forecastQuery = useGetFiveDayForecastQuery({
    lat: String(location.lat),
    lon: String(location.lon),
    unit,
  });
  let content: React.ReactNode | null = null;

  let loader: React.ReactNode = null;

  if (forecastQuery.isLoading && currentWeatherQuery.isLoading) {
    content = (
      <h5 className="text-lightBlue font-bold text-center my-10">
        Data Fetching....
      </h5>
    );
  }

  if (forecastQuery.isSuccess) {
    content = (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="px-10 py-9 grid grid-cols-2 gap-[22px] lg:grid-cols-4 xl:grid-cols-5 xl:px-0"
      >
        {forecastQuery.data?.days
          .filter((data: any, i: number) => i !== 0 && i < 6)
          .map((data: any, i: number) => (
            <motion.div variants={item} key={data.datetime}>
              <WeatherCard
                iconString={data.icon}
                unit={unit}
                minTemp={data.tempmin}
                maxTemp={data.tempmax}
                date={data.datetime}
                isTommorow={i === 0 ? true : false}
              />
            </motion.div>
          ))}
      </motion.div>
    );
  }
  return (
    <div className="bg-darkBlue  overflow-scroll w-full flex flex-col xl:px-[100px] xl:h-screen">
      <div className="flex flex-row items-center justify-end gap-3 mt-[20px] px-10 xl:px-0">
        <RoundedButton isActive={unit === UNITS.C} onClick={handleCelsiusClick}>
          &deg;C
        </RoundedButton>
        <RoundedButton
          isActive={unit === UNITS.F}
          onClick={handleFahrenheitClick}
        >
          &deg;F
        </RoundedButton>
      </div>
      {content}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="px-[21px] mt-[10px] mb-[8px] xl:px-0 xl:mt-[21px] xl:mb-[12px]"
      >
        <h3 className="text-silver text-2xl font-bold mb-[10px] ">
          Today's Hightlights
        </h3>

        <div className="grid grid-cols-1  gap-6  md:grid-cols-2">
          <WindStatuCard
            value={currentWeatherQuery.data?.wind.speed}
            unit={unit}
            windDegree={currentWeatherQuery.data?.wind.deg}
          />
          <HumidityCard value={currentWeatherQuery.data?.main.humidity} />
        </div>

        <div className="grid grid-cols-1  gap-6  md:grid-cols-2 mt-6">
          <VisibilityCard value={currentWeatherQuery.data?.visibility} />
          <AirePressureCard value={currentWeatherQuery.data?.main.pressure} />
        </div>

        <h6 className="text-center text-[#A09FB1] mt-[50px]">
          created by{" "}
          <Link
            target="_blank"
            href="https://ngosa-page.vercel.app"
            className="font-bold text-sm underline"
          >
            Kennedy Ngosa
          </Link>{" "}
          - devChallenges.io
        </h6>
      </motion.div>
    </div>
  );
};

export default Dashboard;
