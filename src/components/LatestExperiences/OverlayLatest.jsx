import React from "react";
import clsx from "clsx";

const OverlayLatest = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={clsx(
        "bg-card-overlay py-6 px-8 rounded-b-md",
        "w-full max-w-[24.33rem] md:w-[24.33rem] mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default OverlayLatest;
