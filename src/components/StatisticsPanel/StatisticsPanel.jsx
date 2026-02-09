import React, { useEffect, useState } from "react";
import clsx from "clsx";

import { fetchLatestPosts } from "../../utils/api.js";
import { calculateStatus } from "../../utils/statistics.js";
import RatingSection from "../Section/RatingSection.jsx";
import CountUp from "../animation/CountUp.jsx";

const PanelText = [
  {
    id: 1,
    textVisited: "Lande besøgt",
    textPosts: "Blogindlæg",
    textLikes: "Samlede likes",
    textClass: "font-dm text-rating-text text-xl tracking-wide  ",
  },
];

const StatisticsPanel = () => {
  const [latestStatistics, setLatestStatistics] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stayData = async () => {
      try {
        setLoading(true);
        const data = await fetchLatestPosts();
        console.log("Fetched statistics:", data);
        setLatestStatistics(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    stayData();
  }, []);

  const { totalPosts, countriesVisited, totalLikes } = calculateStatus(
    latestStatistics || [],
  );

  if (loading)
    return (
      <p className="font-normal text-2xl text-sky-800">Loading statistics...</p>
    );

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

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
        <ul
          key={item.id}
          className="flex flex-row items-center justify-between gap-10"
        >
          <li className="flex flex-col items-center justify-center gap-2">
            <p className="font-dm font-bold text-rating-nr text-6xl">
              <CountUp
                from={0}
                to={countriesVisited}
                separator=","
                direction="up"
                duration={1.4}
                delay={0.3}
                className="count-up-text"
                startCounting={true}
              />
            </p>
            <p className={item.textClass}>{item.textVisited}</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2">
            <p className="font-dm font-bold text-rating-nr text-6xl">
              <CountUp
                from={0}
                to={totalPosts}
                separator=","
                direction="up"
                duration={1.4}
                delay={0.3}
                className="count-up-text"
                startCounting={true}
              />
            </p>
            <p className={item.textClass}>{item.textPosts}</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1 ">
            <div
              className={clsx(
                "flex flex-col items-center justify-center",
                "font-dm font-bold text-rating-nr text-6xl ",
              )}
            >
              <span className="inline-flex items-center justify-center gap-1">
                <CountUp
                  from={0}
                  to={totalLikes}
                  separator=","
                  direction="up"
                  duration={1.4}
                  delay={0.3}
                  className="count-up-text inline-block min-w-[6ch] text-center tabular-nums"
                  startCounting={true}
                />
              </span>
              <p className={clsx("font-normal text-center", item.textClass)}>
                {item.textLikes}
              </p>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
};
