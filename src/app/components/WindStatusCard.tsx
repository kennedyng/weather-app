import React from "react";

const WindStatuCard = () => {
  return (
    <div className="bg-lightBlue flex flex-col justify-center items-center p-[22px] ">
      <h4 className="text-silver  font-medium ">Wind status</h4>
      <div className="flex flex-row items-center">
        <h1 className="text-silver font-bold text-[44px]">7</h1>
        <span className="text-silver text-4xl">mph</span>
      </div>
      <div className="flex flex-row items-center  gap-[5px]">
        <button className="w-[29px] h-[29px] rounded-full bg-[#A09FB1]">
          ll
        </button>
        <span className="text-sm font-medium leading-normal text-silver">
          WVW
        </span>
      </div>
    </div>
  );
};

export default WindStatuCard;
