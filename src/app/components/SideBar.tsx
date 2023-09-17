"use client";

import React, { useState } from "react";
import { useDrawer } from "../context";
import {
  useSearchLocationQuery,
  weatherApi,
} from "../reduxStore/services/weather";
import { MutatingDots } from "react-loader-spinner";
interface Props {
  open: boolean | false | true;
}
const SideBar: React.FC<Props> = ({ open }) => {
  const { closeDrawer } = useDrawer();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSeachOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const [triggerSearch, locationQuery] =
    weatherApi.endpoints.searchLocation.useLazyQuery();

  const handleSeach = () => {
    triggerSearch({ searchQuery });
  };
  return (
    <aside
      className={`bg-lightBlue fixed z-50 top-0 left-0 h-screen w-full flex flex-col px-[46px] py-[10px] duration-300  ${
        !open ? "-translate-x-full" : "translate-x-0"
      }  xl:absolute `}
    >
      <button onClick={closeDrawer} className="text-silver self-end">
        X
      </button>
      <div className="mt-[38px] mb-[28px] flex flex-row items-center gap-3">
        <input
          type="search"
          placeholder="seach location"
          onChange={handleSeachOnChange}
          value={searchQuery}
          className="w-[269px] h-[48px] border-silver text-silver border-[1px]  bg-lightBlue hover:right-0 hover:outline-none"
        />
        <button
          onClick={handleSeach}
          className="bg-[#3C47E9]    text-silver h-[48px] w-[86px] font-semibold text-base"
        >
          Seach
        </button>
      </div>

      <input />

      <div className="flex flex-col justify-center items-center">
        <MutatingDots
          height="100"
          width="100"
          color="#ffec65"
          secondaryColor="#6578FF"
          radius="12.5"
          visible={true}
        />
      </div>
    </aside>
  );
};

export default SideBar;
