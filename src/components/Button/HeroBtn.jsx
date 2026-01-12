import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const HeroBtn = ({ children, to, ...rest }) => {
  return (
    <>
      <Link
        to={to}
        {...rest}
        className={clsx(
          "border-none bg-hero-btn py-4 px-8 rounded cursor-pointer mt-8",
          "font-poppins font-normal text-secondary text-xl",
          "transition duration-300 ease-in-out",
          "hover:bg-hero-btn-hover",
        )}
      >
        {children}
      </Link>
    </>
  );
};

export default HeroBtn;
