import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { ClockLoader } from "react-spinners";

import { IoIosArrowRoundForward } from "react-icons/io";
import clsx from "clsx";

const ScrollLink = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });

      setTimeout(() => {
        scroller.scrollTo("travel", {
          smooth: true,
          duration: 500,
          offset: -80,
        });
        setLoading(false);
      }, 300);
    } else {
      setTimeout(() => {
        scroller.scrollTo("travel", {
          smooth: true,
          duration: 500,
          offset: -80,
        });
        setLoading(false);
      }, 1200);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={clsx(
          "group inline-flex items-center gap-1",
          "font-normal text-xl tracking-wide cursor-pointer",
          "transition-colors duration-300 ease-out",
          "hover:text-sky-400",
        )}
      >
        Tilbage til rejser
        <IoIosArrowRoundForward
          className={clsx(
            "inline-block text-3xl",
            "transition-all duration-300 ease-out",
            "group-hover:translate-x-1",
          )}
        />
      </button>
      {loading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/30">
          <ClockLoader color="#1ed1a8" size={60} />
        </div>
      )}
    </>
  );
};

export default ScrollLink;
