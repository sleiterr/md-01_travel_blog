import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import {
  earth,
  kultur,
  food,
  mountain,
} from "../../assets/iconExports/index.js";
import clsx from "clsx";

const itemsFilterBttn = [
  {
    id: 1,
    text: "All",
    icon: (
      <BiCategoryAlt
        className={clsx(
          "text-xl inline-block text-filter-btn-icon",
          "transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-white",
        )}
      />
    ),
    category: "all",
  },

  {
    id: 2,
    text: "Eventyr",
    icon: (
      <img
        src={earth}
        alt={earth}
        className={clsx(
          "text-xl inline-block",
          "transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-white",
        )}
      />
    ),
    category: "Eventyr",
  },
  {
    id: 3,
    text: "Kultur",
    icon: (
      <img
        src={kultur}
        alt={kultur}
        className={clsx(
          "text-xl inline-block",
          "transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-white",
        )}
      />
    ),
    category: "Kultur",
  },
  {
    id: 4,
    text: "Mad",
    icon: (
      <img
        src={food}
        alt={food}
        className={clsx(
          "text-xl inline-block",
          "transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-white",
        )}
      />
    ),
    category: "Mad",
  },
  {
    id: 5,
    text: "Natur",
    icon: (
      <img
        src={mountain}
        alt={mountain}
        className={clsx(
          "text-xl inline-block",
          "transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-white",
        )}
      />
    ),
    category: "Natur",
  },
];

const BtnFilter = ({ handleCategory }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-bold text-2xl text-white tracking-wide">
          Latest Adventures
        </h2>
        <ul className={clsx("flex flex-row items-center gap-6")}>
          {itemsFilterBttn.map(({ id, category, text, icon }) => {
            return (
              <li key={id}>
                <button
                  className={clsx(
                    "group relative",
                    "flex items-center justify-center gap-2 cursor-pointer",
                    " bg-white px-6 py-2 rounded-full",
                    "transition-all duration-300 ease-out",
                    " hover:bg-filter-btn-hover",
                  )}
                  onClick={() => handleCategory(category)}
                >
                  <p
                    className={clsx(
                      "text-lg text-filter-btn",
                      "overflow-hidden transition-colors duration-300 ease-out group-hover:text-white",
                    )}
                  >
                    {text}
                  </p>
                  {icon}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BtnFilter;
