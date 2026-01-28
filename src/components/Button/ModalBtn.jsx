import React from "react";
import clsx from "clsx";

const ModalBtn = ({ children, className, ...rest }, ref) => {
  return (
    <>
      <button
        type="button"
        ref={ref}
        {...rest}
        className={clsx(
          className,
          "border-none bg-hero-btn py-2 px-4 rounded cursor-pointer mt-8",
          "font-poppins font-normal text-secondary text-base",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-hero-btn",
          "transition duration-300 ease-in-out",
          "hover:bg-hero-btn-hover",
        )}
      >
        {children}
      </button>
    </>
  );
};

export default ModalBtn;

// bg-gray-200  hover: bg - gray - 300;
