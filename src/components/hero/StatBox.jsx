import React from "react";
import { plane } from "../../assets/iconExports/index";

const statText = [
  {
    id: 1,
    title: "12 Lande",
    subtitle: "Besøgt indtil nu",
    element: <img src={plane} alt="Plane Icon" className="w-12 h-auto" />,
    titleClass: "font-semibold text-base text-stat-title tracking-wide",
    subtitleClass: "font-normal text-base text-stat-text tracking-wide",
  },
];

const StatBox = () => {
  return (
    <>
      <StatItem />
    </>
  );
};

export default StatBox;

const StatItem = () => {
  return (
    <div>
      {statText.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-center gap-4 bg-white px-6 py-4 rounded-lg shadow-lg"
        >
          <div className="">{item.element}</div>
          <div className="">
            <h4 className={item.titleClass}>{item.title}</h4>
            <p className={item.subtitleClass}>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
