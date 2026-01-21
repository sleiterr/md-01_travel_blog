import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import OverlayLatest from "./OverlayLatest.jsx";
import clsx from "clsx";

import {
  heart,
  location,
  calendar,
  msg,
} from "../../assets/iconExports/index.js";

const categoryColors = {
  Kultur: "bg-badge-kultur",
  Mad: "bg-badge-mad",
  Ekstrem: "bg-badge-new",
  Natur: "bg-badge-natur",
  Eventyr: "bg-badge-eventyr",
};

const Cardlatest = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <li key={post.id} className="relative z-0 rounded-md overflow-hidden">
          <div
            className={clsx(
              "absolute z-20 top-0 left-0 right-0",
              "px-4",
              "flex justify-between w-sm",
            )}
          >
            <div
              className={clsx(
                categoryColors[post.category] || "bg-gray-500",
                "",
              )}
            >
              <p className="font-normal text-sm tracking-wide pt-4 px-4">
                {post.category}
              </p>
            </div>
            <div
              className={clsx(
                "flex items-center gap-2 mt-2",
                "bg-card-overlay px-4 py-1 rounded-sm",
                "font-normal text-base text-white",
              )}
            >
              <img src={heart} alt="heart icon" />
              <p className="">{post.likes}</p>
            </div>
          </div>
          <div className="">
            <img
              src={post.images[0]}
              alt={post.title}
              className="object-cover w-full h-full"
            />
            <OverlayLatest className="absolute bottom-0 left-0 right-0">
              <div className="flex flex-row items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src={calendar}
                    alt="calendar icon"
                    className="w-4 h-auto"
                  />
                  <span className="form-normal text-lg tracking-wide">
                    {post.date}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={location}
                    alt="location icon"
                    className="w-4 h-auto"
                  />
                  <span className="form-normal text-lg tracking-wide">
                    {post.country}
                  </span>
                </div>
              </div>
              <div className="">
                <h4
                  className={clsx(
                    "font-bold text-lg text-white tracking-wide",
                    "mb-2",
                  )}
                >
                  {post.title}
                </h4>
                <p className="">{post.description}</p>
              </div>
              <div className={clsx("flex items-center justify-between mt-6")}>
                <Link
                  to={`/post-detail/${post.id}`}
                  className={clsx(
                    "group inline-flex items-center gap-1",
                    "font-semibold text-lg tracking-wide",
                    "transition-colors duration-300 ease-out",
                    "hover:text-sky-400",
                  )}
                >
                  Læs Mere
                  <IoIosArrowRoundForward
                    className={clsx(
                      "inline-block text-2xl",
                      "transition-all duration-300 ease-out",
                      "group-hover:translate-x-1",
                    )}
                  />
                </Link>
                <div className="flex items-center gap-2">
                  <img src={msg} alt="message icon" className="w-6 h-auto" />
                  <p className="font-normal text-lg text-white">{post.likes}</p>
                </div>
              </div>
            </OverlayLatest>
          </div>
        </li>
      ))}
    </>
  );
};

export default Cardlatest;
