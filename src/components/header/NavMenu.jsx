import React from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

const NavMenu = () => {
  return (
    <ul className="flex items-start justify-center gap-4">
      <li>
        <Link
          to="hero"
          smooth={true}
          duration={800}
          className={clsx(
            "fondt-code font-normal text-secondary text-lg tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
        >
          Hjem
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={800}
          offset={-100}
          className={clsx(
            "font-normal text-secondary text-lg tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
        >
          Om
        </Link>
      </li>
      <li className="hidden md:block">
        <Link
          to="portfolio"
          smooth={true}
          duration={800}
          offset={-100}
          className={clsx(
            "font-normal text-secondary text-lg tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
        >
          Rejser
        </Link>
      </li>
    </ul>
  );
};

export default NavMenu;
