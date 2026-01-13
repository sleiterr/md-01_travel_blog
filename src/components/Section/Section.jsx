import React from "react";

const Section = ({ children }) => {
  return (
    <section className={`py-32`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default Section;
