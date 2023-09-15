import React from "react";

const AirePressureCard = () => {
  return (
    <div className="bg-lightBlue flex flex-col justify-center items-center  p-[22px]">
      <h4 className="text-silver  font-medium ">Air Pressure</h4>
      <div className="flex flex-row items-center mt-[10px]">
        <h1 className="text-silver font-bold text-[44px]">998</h1>
        <span className="text-silver text-4xl">mb</span>
      </div>
    </div>
  );
};

export default AirePressureCard;
