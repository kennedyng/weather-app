"use client";

import React from "react";

import { motion } from "framer-motion";
interface Props {
  value?: string | number;
}
const Progress: React.FC<Props> = ({ value = 0 }) => {
  return (
    <div className="w-full h-[8px] bg-silver rounded-[80px]">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 4, delay: 1, type: "tween" }}
        className="h-full bg-[#FFEC65] rounded-[80px]"
      ></motion.div>
    </div>
  );
};

export default Progress;
