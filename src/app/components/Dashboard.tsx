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
import { item } from "../amin";
import {
  setUnitToCelsius,
  setUnitToKelvin,
} from "../reduxStore/features/userInputsSlice";
import { useAppDispatch, useAppSelector } from "../reduxStore/hooks";
import {
  useGetCurrentWeatherQuery,
  useGetFiveDayForecastQuery,
} from "../reduxStore/services/weather";
import { UNITS } from "../constants";

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
    unity: unit,
  });

  const forecastContent = forecastQuery.data?.list.map((data: any) => (
    <motion.div variants={item} key={data.dt}>
      <WeatherCard
        weatherId={data.weather[0].id}
        unit={unit}
        minTemp={data.main.temp_min}
        maxTemp={data.main.temp_max}
        date={data.dt}
      />
    </motion.div>
  ));

  return (
    <div className="bg-darkBlue overflow-scroll w-full h-full min-h-screen flex flex-col xl:px-[100px] xl:max-h-screen">
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
      <motion.div
        // initial="hidden"
        // whileInView="visible"
        // viewport={{ once: true }}
        // variants={container}
        className="px-10 py-9 grid grid-cols-2 gap-[22px] lg:grid-cols-4 xl:grid-cols-5 xl:px-0"
      >
        {forecastContent}
      </motion.div>
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
