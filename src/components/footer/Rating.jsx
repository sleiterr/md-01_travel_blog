import React, { useEffect, useState } from "react";

import { fetchLatestPosts } from "../../utils/api.js";
import { calculateStatus } from "../../utils/statistics.js";

import clsx from "clsx";
import { FaRegStar, FaStar } from "react-icons/fa";

const Rating = () => {
  const [ratingData, setRatingData] = useState(null);
  const [totalRewiews, setTotalReviews] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const stayData = async () => {
      try {
        setLoading(true);
        const data = await fetchLatestPosts();
        console.log("Fetched rating:", data);
        const stats = calculateStatus(data);

        setRatingData(Number(stats.averageRating));
        setTotalReviews(data.length);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    stayData();
  }, []);

  if (loading)
    return (
      <p className="font-light text-xl text-white">Loading statistics...</p>
    );

  if (error) return <p className="font-light text-xl text-red-500">{error}</p>;

  if (ratingData === null) return null;

  const stars = Array(5).fill(0);
  const colors = { yellow: "#FACC15", grey: "#a9a9a9" };

  return (
    <div className={clsx("bg-rating-bg rounded-xl", "py-4 px-4")}>
      <p className="font-normal text-secondary-footer text-base tracking-wide">
        Brugervurdering:
      </p>
      <div className="flex items-center py-2">
        {stars.map((_, index) =>
          index < Math.round(ratingData) ? (
            <FaStar key={index} size={24} color={colors.yellow} />
          ) : (
            <FaRegStar key={index} size={24} color={colors.grey} />
          ),
        )}
        <span className="font-semibold text-base text-white ml-2">
          {ratingData}/5
        </span>
      </div>
      <p className="font-normal text-secondary-footer text-base tracking-wide">
        Baseret på {totalRewiews} anmeldelser
      </p>
    </div>
  );
};

export default Rating;
