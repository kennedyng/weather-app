"use client";

import { showerICon } from "@/asserts";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "react-toastify";
import { SideBar } from ".";
import { useDrawer } from "../context";
import { setLocation } from "../reduxStore/features/userInputsSlice";
import { useAppDispatch, useAppSelector } from "../reduxStore/hooks";
import { useGetCurrentWeatherQuery } from "../reduxStore/services/weather";
import { getUnitySymbol } from "@/utils/unitConventer";
import { getImgSrcByWeatherId } from "@/utils/getImgSrcByWeatherId";

const Summary: React.FC = () => {
  const { open, openDrawer } = useDrawer();

  const dispatch = useAppDispatch();
  const { location, unit } = useAppSelector((state) => state.userInputsReducer);

  const { isLoading, isFetching, data, error } = useGetCurrentWeatherQuery({
    lat: String(location.lat),
    lon: String(location.lon),
    unity: unit,
  });

  if (!isLoading && error) {
    throw new Error("Failed to Fetch Data");
  }

  const handleCurrentLoaction = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          dispatch(
            setLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
          ),
        (error) => {
          console.error(error);
        }
      );
    } else {
      toast.warn("Geolocation is not supported by this browser");
    }
  };
  return (
    <div className="w-full sticky  flex flex-col  bg-lightBlue px-[11px] py-[18px] min-h-screen lg:max-w-[459px] md:p-[20px] xl:max-h-screen  ">
      <div className="flex flex-row justify-between ">
        <SideBar open={open} />
        <button
          onClick={openDrawer}
          className="text-silver bg-[#6E707A] font-medium text-base px-[18px] py-[10px] box__shadow hover:translate-y-2 duration-75 "
        >
          Search for places
        </button>

        <button
          onClick={handleCurrentLoaction}
          className="text-silver bg-[#6E707A] font-medium h-[40px] w-[40px] text-base rounded-full box__shadow"
        >
          s
        </button>
      </div>

      <motion.div
        transition={{
          repeat: Infinity,
          duration: 2,
          type: "tween",

          repeatType: "reverse",
        }}
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: 20, opacity: 0.5 }}
        className="self-center  mt-[46px]  mb-[10px] 2xl:mt-[76px]"
      >
        <Image
          src={getImgSrcByWeatherId(data?.weather[0].id)}
          alt="weather"
          width={150}
          height={174}
          priority
        />
      </motion.div>

      <div className="text-center">
        <h1 className="text-silver font-medium  text-[120px] ">
          {Math.ceil(data?.main.temp ?? 0)}
          <span className="text-[#A09FB1] text-5xl duration-700">
            &deg;{getUnitySymbol(unit)}
          </span>
        </h1>
        <h5 className="text-2xl text-[#A09FB1] font-semibold mt-[13px] capitalize">
          {data?.weather[0].description}
        </h5>

        <div className="flex flex-row gap-[16px] justify-center text-[#88869D] text-lg mt-[48px] mb-[33px]">
          <span>Today</span>
          <span>•</span>
          <span>Fri 5 Jun</span>
        </div>

        <div className="flex flex-row gap-2 justify-center text-[#88869D] ">
          <span>I</span>
          <span className="font-semibold">{data?.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
