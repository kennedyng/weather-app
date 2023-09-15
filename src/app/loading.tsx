import { ClearIcon, showerICon } from "@/asserts";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-darkBlue flex flex-col justify-center items-center gap-4">
      <Image
        src={ClearIcon}
        alt="logo"
        width={70}
        height={78}
        className="cover animate-bounce"
      />
      <h1 className="font-bold text-silver text-lg ">Loading...</h1>
    </div>
  );
};

export default Loading;
