import React, { ReactNode } from "react";

interface ButtonOutlineProps {
  children: ReactNode;
}

const ButtonOutline = ({ children }: ButtonOutlineProps) => {
  return (
    <button className=" rounded-l-full rounded-r-full border border-orange-500 bg-white px-5 py-2  transition-all hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-400 ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
