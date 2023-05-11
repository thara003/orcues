import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  addClass?: string;
  [key: string]: any;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  addClass,
  ...props
}) => {
  return (
    <button
      className={
        "text-white-500 hover:shadow-orange-md rounded-lg bg-orange-500 px-12 py-3 font-semibold outline-none transition-all lg:px-16 lg:py-4 " +
        addClass
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
