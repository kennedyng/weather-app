"use client";

import { getWindUnity } from "@/utils/unitConventer";
import React from "react";
import { motion } from "framer-motion";
interface Props {
  value: number;
  unit: string;
  windDegree?: number;
}
const WindStatuCard: React.FC<Props> = ({ value = 0, unit, windDegree }) => {
  return (
    <div className="bg-lightBlue flex flex-col justify-center items-center p-[22px] ">
      <h4 className="text-silver  font-medium ">Wind status</h4>
      <div className="flex flex-row items-center">
        <h1 className="text-silver font-bold text-[44px]">
          {Math.floor(value)}
        </h1>
        <span className="text-silver text-4xl">{getWindUnity(unit)}</span>
      </div>
      <div className="flex flex-row items-center  gap-[5px]">
        <motion.button
          animate={{ rotate: 0 }}
          transition={{ duration: 2, delay: 1 }}
          whileInView={{ rotate: `${windDegree}deg` }}
          className="w-[29px] h-[29px] rounded-full bg-[#A09FB1]"
        >
          ll
        </motion.button>
        <span className="text-sm font-medium leading-normal text-silver">
          WVW
        </span>
      </div>
    </div>
  );
};

export default WindStatuCard;
