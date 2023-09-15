"use client";

import React from "react";
import { useDrawer } from "../context";
interface Props {
  open: boolean | false | true;
}
const SideBar: React.FC<Props> = ({ open }) => {
  const { closeDrawer } = useDrawer();

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
          placeholder="seach"
          className="w-[269px] h-[48px] border-silver text-silver border-[1px] bg-lightBlue hover:right-0 hover:outline-none"
        />
        <button className="bg-[#3C47E9]    text-silver h-[48px] w-[86px] font-semibold text-base">
          Seach
        </button>
      </div>

      <input />
    </aside>
  );
};

export default SideBar;
