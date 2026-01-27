import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

const RatingStars = ({ value, onChange }) => {
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
    onChange(value);
  };

  return (
    <>
      <div className="flex gap-1">
        {stars.map((_, index) => {
          const startValue = index + 1;

          return (
            <FaStar
              key={index}
              size={32}
              color={
                (hoverValue || value) >= startValue
                  ? colors.orange
                  : colors.grey
              }
              onClick={() => handleClickStar(startValue)}
              onMouseOver={() => handleMouseOverStar(startValue)}
              onMouseLeave={handleMouseLeaveStar}
              className="cursor-pointer"
            />
          );
        })}
      </div>
    </>
  );
};

export default RatingStars;
