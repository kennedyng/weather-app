"use client";

import { showerICon } from "@/asserts";
import Image from "next/image";
import { SideBar } from ".";
import { useDrawer } from "../context";
import { motion } from "framer-motion";

const Summary: React.FC = () => {
  const { open, openDrawer } = useDrawer();
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

        <button className="text-silver bg-[#6E707A] font-medium h-[40px] w-[40px] text-base rounded-full box__shadow">
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
        <Image src={showerICon} alt="shower" width={150} height={174} />
      </motion.div>

      <div className="text-center">
        <h1 className="text-silver font-medium  text-[120px] ">
          15
          <span className="text-[#A09FB1] text-5xl">&deg;C </span>
        </h1>
        <h5 className="text-2xl text-[#A09FB1] font-semibold mt-[13px]">
          Shower
        </h5>

        <div className="flex flex-row gap-[16px] justify-center text-[#88869D] text-lg mt-[48px] mb-[33px]">
          <span>Today</span>
          <span>•</span>
          <span>Fri 5 Jun</span>
        </div>

        <div className="flex flex-row gap-2 justify-center text-[#88869D] ">
          <span>I</span>
          <span className="font-semibold">Lusaka</span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
