import { ClearIcon } from "@/asserts";
import Image from "next/image";
import React from "react";

const WeatherCard = () => {
  return (
    <div className=" bg-lightBlue p-[18px] flex flex-col justify-center items-center cursor-pointer  duration-300 hover:translate-y-2">
      <h4 className="text-silver text-base font-medium">Tommorow</h4>
      <Image
        src={ClearIcon}
        width={56.439}
        height={62}
        alt=""
        className="mt-[10px]"
      />

      <div className="text-center flex flex-row gap-4 mt-[31px]">
        <span className="text-silver font-medium text-base">16&deg;C </span>
        <span className="text-[#A09FB1] font-medium text-base">16&deg;C </span>
      </div>
    </div>
  );
};

export default WeatherCard;
