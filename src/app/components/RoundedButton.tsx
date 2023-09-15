import React, { HTMLProps, ReactNode } from "react";

interface Props extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
}
const RoundedButton: React.FC<Props> = ({
  children,
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`rounded-full bg-[#A09FB1] h-[40px] w-[40px] font-bold text-silver ${rest.className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
