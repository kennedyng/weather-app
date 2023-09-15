import React from "react";
import { Progress } from ".";

const HumidityCard = () => {
  return (
    <div className="bg-lightBlue flex flex-col justify-center items-center p-[22px] ">
      <h4 className="text-silver  font-medium ">Humidity</h4>
      <div className="flex flex-row items-center">
        <h1 className="text-silver font-bold text-[44px]">84%</h1>
      </div>
      <div className="w-[80%]">
        <div className="flex flex-row justify-between text-[#A09FB1] text-xs font-bold mb-1">
          <span>0%</span>
          <span>50%</span>
          <span>100%</span>
        </div>
        <Progress />
      </div>
    </div>
  );
};

export default HumidityCard;
