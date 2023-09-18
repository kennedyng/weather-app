import React, { HTMLProps, ReactNode } from "react";

interface Props extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  isActive?: boolean;
}
const RoundedButton: React.FC<Props> = ({
  children,
  type = "button",
  isActive,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`rounded-full  h-[40px] w-[40px] font-bold text-silver ${
        isActive ? "bg-[#A09FB1]" : "bg-[#585676]"
      } ${rest.className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
