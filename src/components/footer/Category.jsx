import React, { useState, useEffect } from "react";
import { fetchLatestPosts } from "../../utils/api.js";
import { calculateStatus } from "../../utils/statistics.js";

const Category = () => {
  const [statisticsData, setStatisticsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const statData = async () => {
      try {
        setLoading(true);
        const data = await fetchLatestPosts();
        console.log("Fetched statistics:", data);
        setStatisticsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    statData();
  }, []);

  const { categoriesCount } = calculateStatus(statisticsData || []);

  if (loading)
    return (
      <p className="font-light text-xl text-white">Loading statistics...</p>
    );

  if (error) return <p className="font-light text-xl text-red-500">{error}</p>;

  return (
    <>
      <ListCategory categoriesCount={categoriesCount} />
    </>
  );
};

export default Category;

const ListCategory = ({ categoriesCount }) => {
  return (
    <>
      <ul className="flex flex-col items-start gap-3 w-full">
        {Object.entries(categoriesCount).map(([category, count]) => (
          <li key={category}>
            <p className="font-normal text-secondary-footer text-base tracking-wide">
              {category}({count})
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
