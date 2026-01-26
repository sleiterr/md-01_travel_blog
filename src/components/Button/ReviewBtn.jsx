import React from "react";
import clsx from "clsx";

const ReviewBtn = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        type="button"
        {...rest}
        className={clsx(
          "group inline-flex items-center gap-2",
          "font-normal text-xl tracking-wide cursor-pointer",
          "transition-colors duration-300 ease-out",
          "hover:text-sky-400",
        )}
      >
        {children}
      </button>
    </>
  );
};

export default ReviewBtn;
