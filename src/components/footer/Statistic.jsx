import React, { useState, useEffect } from "react";
import { fetchLatestPosts } from "../../utils/api.js";
import { calculateStatus } from "../../utils/statistics.js";

const StatText = [
  {
    id: 1,
    textPosts: "Blogindlæg",
    textVisited: "Lande besøgt",
    textLikes: "Samlede likes",
    textComment: "Kommentarer",
    textClass: "font-normal text-secondary-footer text-base tracking-wide",
  },
];

const Statistic = () => {
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

  const { totalPosts, countriesVisited, totalLikes, totalComments } =
    calculateStatus(latestStatistics || []);

  if (loading)
    return (
      <p className="font-light text-xl text-white">Loading statistics...</p>
    );

  if (error) return <p className="font-light text-xl text-red-500">{error}</p>;

  return (
    <>
      <ListStatistic
        countriesVisited={countriesVisited}
        totalPosts={totalPosts}
        totalLikes={totalLikes}
        totalComments={totalComments}
      />
    </>
  );
};

export default Statistic;

const ListStatistic = ({
  countriesVisited,
  totalPosts,
  totalLikes,
  totalComments,
}) => {
  return (
    <>
      {StatText.map((item) => (
        <ul key={item.id} className="flex flex-col items-start gap-3 w-full">
          <li className="flex flex-row items-center justify-between w-full">
            <p className={item.textClass}>{item.textPosts}</p>
            <p className="font-normal text-primary-footer text-base tracking-wide">
              {totalPosts}
            </p>
          </li>
          <li className="flex flex-row items-center justify-between w-full">
            <p className={item.textClass}>{item.textVisited}</p>
            <p className="font-normal text-primary-footer text-base tracking-wide">
              {countriesVisited}
            </p>
          </li>
          <li className="flex flex-row items-center justify-between w-full">
            <p className={item.textClass}>{item.textLikes}</p>
            <p className="font-normal text-primary-footer text-base tracking-wide">
              {totalLikes}
            </p>
          </li>
          <li className="flex flex-row items-center justify-between w-full">
            <p className={item.textClass}>{item.textComment}</p>
            <p className="font-normal text-primary-footer text-base tracking-wide">
              {totalComments}
            </p>
          </li>
        </ul>
      ))}
    </>
  );
};
