import React from "react";
import clsx from "clsx";

const SectionPost = ({ children, style }) => {
  return (
    <section
      className={clsx(
        "relative bg-cover bg-no-repeat bg-center md:aspect-8/5",
        "w-full min-w-[320px] h-[60vh] md:h-[70vh] lg:h-screen",
      )}
      style={style}
    >
      <div className="grid grid-cols-2">{children}</div>
    </section>
  );
};

export default SectionPost;
