"use client";

import React, { ReactNode, useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { useDrawer } from "../context";
import { setLocation } from "../reduxStore/features/userInputsSlice";
import { weatherApi } from "../reduxStore/services/weather";
interface Props {
  open: boolean | false | true;
}
const SideBar: React.FC<Props> = ({ open }) => {
  const { closeDrawer } = useDrawer();

  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSeachOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const [triggerSearch, locationQuery] =
    weatherApi.endpoints.searchLocation.useLazyQuery();

  const handleSeach = () => {
    triggerSearch({ searchQuery });
  };

  const handleCityClick = (lat: number, lon: number) => {
    dispatch(setLocation({ lon, lat }));
    closeDrawer();
  };
  let content: ReactNode | null = null;
  if (locationQuery.isFetching) {
    content = (
      <div className="flex flex-col justify-center items-center">
        <MutatingDots
          height="100"
          width="100"
          color="#65ffa5"
          secondaryColor="#E7E7EB"
          radius="12.5"
          visible={true}
        />

        <code className="font-bold text-silver">Loading...</code>
      </div>
    );
  }

  if (locationQuery.isSuccess) {
    content = (
      <ul className="flex flex-col text-silver">
        {locationQuery.data?.map(
          ({ name, country, lon, lat }: any, i: number) => (
            <li
              key={i}
              onClick={() => handleCityClick(lat, lon)}
              className="group cursor-pointer w-full h-[64px] flex flex-row px-3 justify-between items-center text-silver hover:border-[1px]  duration-100  border-[#616475]"
            >
              <span>{name}</span>
              <span className="group-hover:hidden inline-block text-xs font-bold ">
                {country}
              </span>
              <span className="group-hover:inline-block hidden ">l</span>
            </li>
          )
        )}
      </ul>
    );
  }

  if (locationQuery.isSuccess && locationQuery.data.length === 0) {
    content = (
      <h5 className="text-center py-2 text-silver font-bold">
        No Location Found
      </h5>
    );
  }

  if (locationQuery.isError) {
    throw new Error("Something went wrong");
  }
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
          type="text"
          placeholder="seach location"
          onChange={handleSeachOnChange}
          value={searchQuery}
          className="w-[269px] h-[48px] border-silver text-silver border-[1px]  bg-lightBlue hover:right-0 hover:outline-none"
        />
        <button
          disabled={locationQuery.isFetching}
          onClick={handleSeach}
          className="bg-[#3C47E9] disabled:bg-[#5d64ca] text-silver hover:translate-y-2 duration-200 h-[48px] w-[86px] font-semibold text-base"
        >
          Search
        </button>
      </div>
      {content}
    </aside>
  );
};

export default SideBar;
