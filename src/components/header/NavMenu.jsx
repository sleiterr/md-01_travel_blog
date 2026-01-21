import React from "react";
import { Link } from "react-scroll";
import clsx from "clsx";

const NavMenu = () => {
  return (
    <ul className="flex items-start justify-center gap-12">
      <li>
        <a
          href="#hero"
          smooth={true}
          duration={800}
          className={clsx(
            "fondt-code font-normal text-secondary text-xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
        >
          Hjem
        </a>
      </li>
      <li>
        <a
          href="#om"
          smooth={true}
          duration={800}
          offset={-100}
          className={clsx(
            "font-normal text-secondary text-xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
        >
          Om
        </a>
      </li>
      <li className="hidden md:block">
        <a
          href="#travel"
          className={clsx(
            "font-normal text-secondary text-xl tracking-wide",
            "relative before:content[''] before:absolute before:w-0 before:h-[2px] before:rounded-xs before:bg-border before:bottom-[-.25rem] before:left-0 before:transition-all",
            "cursor-pointer before:duration-300 hover:before:w-full",
          )}
        >
          Rejser
        </a>
      </li>
    </ul>
  );
};

export default NavMenu;
