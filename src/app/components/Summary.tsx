"use client";

import { getImgSrcByWeatherId } from "@/utils/getImgSrcByWeatherId";
import { getUnitySymbol } from "@/utils/unitConventer";
import { motion } from "framer-motion";
import moment from "moment";
import Image from "next/image";
import { ReactNode } from "react";
import { MutatingDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import { SideBar } from ".";
import { useDrawer } from "../context";
import { setLocation } from "../reduxStore/features/userInputsSlice";
import { useAppDispatch, useAppSelector } from "../reduxStore/hooks";
import { useGetCurrentWeatherQuery } from "../reduxStore/services/weather";
import { MdOutlineMyLocation } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { CloudBgIcon } from "@/asserts";

const Summary: React.FC = () => {
  const { open, openDrawer } = useDrawer();
  const dispatch = useAppDispatch();
  const { location, unit } = useAppSelector((state) => state.userInputsReducer);

  const { isLoading, isFetching, data, error } = useGetCurrentWeatherQuery({
    lat: String(location.lat),
    lon: String(location.lon),
    unity: unit,
  });

  const handleCurrentLoaction = async () => {
    if (navigator.geolocation) {
      const res = await navigator.geolocation.getCurrentPosition(
        (position) =>
          dispatch(
            setLocation({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            })
          ),
        (error) => {
          toast("Can't get your Location. Allow browser Loaction", {
            className: "bg-darkBlue text-silver",
          });
        }
      );
    } else {
      toast("Geolocation not supported by the browser", {
        className: "bg-darkBlue text-silver",
      });
    }
  };

  if (error) {
    throw new Error("failed something went wrong");
  }

  let content: ReactNode | null = null;

  if (isFetching) {
    content = (
      <div className="w-full h-screen flex flex-col items-center justify-center gap-2 ">
        <MutatingDots
          height="100"
          width="100"
          color="#ffec65"
          secondaryColor="#6578FF"
          radius="12.5"
          visible={true}
        />

        <code className="font-semibold text-silver">I'm Thinking...</code>
      </div>
    );
  }

  if (!isLoading && data) {
    content = (
      <>
        <div className="flex flex-row justify-between ">
          <SideBar open={open} />
          <button
            onClick={openDrawer}
            className="text-silver bg-[#6E707A]  hover:bg-slate-400 font-medium text-base px-[18px] py-[10px] box__shadow hover:translate-y-2 duration-75 "
          >
            Search for places
          </button>
          <button className="flex items-center justify-center text-silver bg-[#6E707A] hover:bg-slate-400 font-medium h-[40px] w-[40px] text-base rounded-full box__shadow">
            <MdOutlineMyLocation
              onClick={handleCurrentLoaction}
              className="h-[22px] w-[22px]"
            />
          </button>
        </div>

        <Image
          src={CloudBgIcon}
          alt="cloud bg"
          className="absolute top-[60px] left-0  w-full object-fill bg-no-repeat bg-cover  opacity-10"
        />

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
            {Math.floor(data?.main.temp ?? 0)}
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
            <span>{moment(new Date()).format("MMM Do YY")}</span>
          </div>

          <div className="flex flex-row gap-2 justify-center text-[#88869D] ">
            <FaLocationDot className="h-[22px] w-[22px]" />
            <span className="font-semibold">{data?.name}</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="w-full sticky  flex flex-col min-h-screen bg-lightBlue px-[11px] py-[18px] lg:max-w-[459px] md:p-[20px] ">
      {content}
    </div>
  );
};

export default Summary;
