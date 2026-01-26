import React, { useEffect, useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import clsx from "clsx";

const FooterSocials = () => {
  return (
    <>
      <h4 className="font-bold text-base text-primary-footer tracking-wide mb-4">
        Følg Med
      </h4>
      <ul className="flex items-center gap-4 mb-4">
        <li>
          <a
            href="#"
            className="group inline-flex items-center justify-center transition-all duration-300 ease-out "
          >
            <FaInstagram
              className={clsx(
                "w-8 h-8 text-footer-icon",
                "group-hover:scale-110 hover:text-white",
              )}
            />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group inline-flex items-center justify-center transition-all duration-300 ease-out "
          >
            <IoLogoYoutube
              className={clsx(
                "w-8 h-8 text-footer-icon",
                "group-hover:scale-110 hover:text-white",
              )}
            />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="group inline-flex items-center justify-center transition-all duration-300 ease-out "
          >
            <FaTiktok
              className={clsx(
                "w-8 h-8 text-footer-icon",
                "group-hover:scale-110 hover:text-white",
              )}
            />
          </a>
        </li>
      </ul>
    </>
  );
};

export default FooterSocials;
