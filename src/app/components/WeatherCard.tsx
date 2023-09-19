import { ClearIcon } from "@/asserts";
import { getImgSrcByWeatherId } from "@/utils/getImgSrcByWeatherId";
import { getUnitySymbol } from "@/utils/unitConventer";
import { data } from "autoprefixer";
import moment from "moment";
import Image from "next/image";
import React from "react";

interface Props {
  date: number;
  unit: string;
  minTemp: number;
  maxTemp: number;
  weatherId: number;
  isTommorow?: boolean | true | false;
}
const WeatherCard: React.FC<Props> = ({
  date,
  unit,
  minTemp,
  maxTemp,
  weatherId,
  isTommorow,
}) => {
  return (
    <div className=" bg-lightBlue py-[18px]  px-2 flex flex-col justify-center items-center cursor-pointer  duration-300 hover:translate-y-2">
      <h4 className="text-silver text-base font-medium  leading-normal  ">
        {isTommorow ? "Tommorow" : moment(date).format("ddd, D MMM")}
      </h4>
      <Image
        src={getImgSrcByWeatherId(weatherId)}
        width={56.439}
        height={62}
        alt=""
        className="mt-[10px] w-[66px] h-[62px]"
      />

      <div className="text-center flex flex-row gap-4 mt-[31px]">
        <span className="text-silver font-medium text-base">
          {Math.floor(minTemp)}
          <span>&deg;</span>
          {getUnitySymbol(unit)}
        </span>
        <span className="text-[#A09FB1] font-medium text-base">
          {Math.floor(maxTemp)}
          <span>&deg;</span>
          {getUnitySymbol(unit)}
        </span>
      </div>
    </div>
  );
};

export default WeatherCard;
