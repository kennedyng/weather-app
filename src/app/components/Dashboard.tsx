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
import { useDispatch } from "react-redux";
import {
  setUnitToCelsius,
  setUnitToKelvin,
} from "../reduxStore/features/userInputsSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleCelsiusClick = () => {
    dispatch(setUnitToCelsius());
  };

  const handleFahrenheitClick = () => {
    dispatch(setUnitToKelvin());
  };
  return (
    <div className="bg-darkBlue overflow-scroll w-full h-full min-h-screen flex flex-col xl:px-[100px] xl:max-h-screen">
      <div className="flex flex-row items-center justify-end gap-3 mt-[20px] px-10 xl:px-0">
        <RoundedButton onClick={handleCelsiusClick}>&deg;C</RoundedButton>
        <RoundedButton onClick={handleFahrenheitClick}>&deg;F</RoundedButton>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="px-10 py-9 grid grid-cols-2 gap-[26px] lg:grid-cols-4 xl:grid-cols-5 xl:px-0"
      >
        <motion.div variants={item}>
          <WeatherCard />
        </motion.div>
        <motion.div variants={item}>
          <WeatherCard />
        </motion.div>
        <motion.div variants={item}>
          <WeatherCard />
        </motion.div>
        <motion.div variants={item}>
          <WeatherCard />
        </motion.div>
        <motion.div variants={item}>
          <WeatherCard />
        </motion.div>
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
          <WindStatuCard />
          <HumidityCard />
        </div>

        <div className="grid grid-cols-1  gap-6  md:grid-cols-2 mt-6">
          <VisibilityCard />
          <AirePressureCard />
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
