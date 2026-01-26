import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const RatingStars = () => {
  const [rating, setRating] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  const colors = {
    orange: "#F2C265",
    grey: "#a9a9a9",
  };

  const stars = Array(5).fill(0);

  const handleMouseOverStar = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeaveStar = () => {
    setHoverValue(undefined);
  };

  const handleClickStar = (value) => {
    setRating(value);
  };

  return (
    <>
      <div className="flex gap-1">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={32}
              value={rating}
              color={
                (hoverValue || rating) > index ? colors.orange : colors.grey
              }
              onClick={() => handleClickStar(index + 1)}
              onMouseOver={() => handleMouseOverStar(index + 1)}
              onMouseLeave={() => handleMouseLeaveStar()}
            />
          );
        })}
      </div>
    </>
  );
};

export default RatingStars;
