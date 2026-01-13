import React from "react";

const RatingSection = ({ children }) => {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">{children}</div>
    </section>
  );
};

export default RatingSection;
