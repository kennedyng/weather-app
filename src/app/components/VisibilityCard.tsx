import { getMilesFromkm } from "@/utils/unitConventer";
import React from "react";

interface Props {
  value: number | undefined;
}

const VisibilityCard: React.FC<Props> = ({ value = 0 }) => {
  return (
    <div className="bg-lightBlue flex flex-col justify-center items-center p-[22px]  ">
      <h4 className="text-silver  font-medium ">Visibility</h4>
      <div className="flex flex-row items-center">
        <h1 className="text-silver font-bold text-[44px]">
          {getMilesFromkm(Number(value)).toLocaleString("en-US")}
        </h1>
        <span className="text-silver text-4xl">miles</span>
      </div>
    </div>
  );
};

export default VisibilityCard;
