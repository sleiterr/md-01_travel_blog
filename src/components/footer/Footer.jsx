import React from "react";
import Statistic from "./Statistic";
import Category from "./Category";
import { logo } from "../../assets/iconExports/index";
import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import clsx from "clsx";

const footerText = [
  {
    id: 1,
    title: "PiligrimTales",
    text: "Følg med på min rejse rundt om verden og få inspiration til dine egne eventyr.",
    titleClass: "font-extrabold text-2xl text-primary-footer",
    textClass: "font-normal text-base text-secondary-footer tracking-wide",
  },
];

const Footer = ({
  totalPosts,
  countriesVisited,
  totalLikes,
  totalComments,
  categoriesCount,
}) => {
  return (
    <footer className="flex flex-col items-center justify-center py-12 px-20">
      <div
        className={clsx("grid grid-cols-4 gap-x-9", "bg-footer mb-8 w-full")}
      >
        <Footeritem />
        <div className="col-span-1 flex flex-col align-start gap-4">
          <h4 className="font-bold text-base text-primary-footer tracking-wide ">
            Statistikker
          </h4>
          <Statistic
            totalPosts={totalPosts}
            countriesVisited={countriesVisited}
            totalLikes={totalLikes}
            totalComments={totalComments}
          />
        </div>
        <div className="col-span-1 flex flex-col align-start gap-4">
          <h4 className="font-bold text-base text-primary-footer tracking-wide ">
            Kategorier
          </h4>
          <Category categoriesCount={categoriesCount} />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-1"></div>
      </div>
      <div
        className={clsx(
          "relative flex justify-center w-full",
          "before:content-[''] before:absolute before:left-1/2 before:top-0  before:w-full before:h-px before:bg-zinc-600 before:-translate-x-1/2",
        )}
      >
        <p
          className={clsx(
            "flex items-center gap-2 pt-8",
            "font-light text-base text-secondary-footer tracking-wide",
          )}
        >
          <FaRegCopyright className="w-4 h-auto" /> 2023 PiligrimTales. Alle
          rettigheder forbeholdes.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

const Footeritem = () => {
  return (
    <>
      {footerText.map((item) => (
        <ul key={item.id} className="cols-span-1 flex flex-col gap-4">
          <li className="flex items-center gap-2 ">
            <img src={logo} alt="Footer Logo" className="w-8 h-8 shrink-0" />
            <p className={item.titleClass}>{item.title}</p>
          </li>
          <li className="w-2xs">
            <p className={item.textClass}>{item.text}</p>
          </li>
        </ul>
      ))}
    </>
  );
};
