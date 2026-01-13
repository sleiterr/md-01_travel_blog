import React from "react";
import { ImPlus } from "react-icons/im";
import clsx from "clsx";

import postsData from "../../../public/data/latestData.json";
import RatingSection from "../Section/RatingSection.jsx";

const PanelText = [
  {
    id: 1,
    textVisited: "Lande besøgt",
    textPosts: "Blogindlæg",
    textLikes: "Samlede likes",
    textClass: "font-dm text-rating-text text-xl tracking-wide",
  },
];

const StatisticsPanel = () => {
  const posts = postsData.latestPosts; // Assuming postsData is defined elsewhere

  const totalPosts = posts.length; // generate total posts
  const countriesVisited = [...new Set(posts.map((post) => post.country))]
    .length; // total unique countries visited
  const totalLikes = posts.reduce((acc, post) => acc + post.likes, 0); // total likes

  return (
    <RatingSection>
      <div className="">
        <PanelItem
          countriesVisited={countriesVisited}
          totalPosts={totalPosts}
          totalLikes={totalLikes}
        />
      </div>
    </RatingSection>
  );
};

export default StatisticsPanel;

const PanelItem = ({ countriesVisited, totalPosts, totalLikes }) => {
  return (
    <>
      {PanelText.map((item) => (
        <ul className="flex flex-col md:flex-row items-center justify-between gap-10">
          <li
            key={item.id}
            className="flex flex-col items-center justify-center gap-2"
          >
            <p className="font-dm font-bold text-rating-nr text-6xl">
              {countriesVisited}
            </p>
            <p className={item.textClass}>{item.textVisited}</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
            <p className="font-dm font-bold text-rating-nr text-6xl">
              {totalPosts}
            </p>
            <p className={item.textClass}>{item.textPosts}</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <p
              className={clsx(
                "flex items-center gap-4",
                "font-dm font-bold text-rating-nr text-6xl",
              )}
            >
              <span>
                <ImPlus className="text-3xl" />
              </span>
              {totalLikes}
            </p>
            <p className={item.textClass}>{item.textLikes}</p>
          </li>
        </ul>
      ))}
    </>
  );
};
