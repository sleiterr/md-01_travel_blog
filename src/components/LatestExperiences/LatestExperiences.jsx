import React, { useState, useEffect, useMemo } from "react";
import { fetchLatestPosts } from "../../utils/api.js";
import Section from "../Section/Section.jsx";
import Cardlatest from "./Cardlatest.jsx";
import BtnFilter from "./BtnFilter.jsx";

const latestText = [
  {
    id: 1,
    title: "Seneste Oplevelser",
    subtitle: "Læs om mine eventyr fra hele verden",
    titleClass: "font-semibold text-4xl text-white pb-4",
    subtitleClass: "font-normal text-base text-white",
  },
];

const LatestExperiences = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    const stayData = async () => {
      try {
        setLoading(true);
        const data = await fetchLatestPosts();
        console.log("Fetched stays:", data);
        setLatestPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    stayData();
  }, [selectedCategory]);

  if (loading)
    return <p className="font-normal text-2xl text-sky-800">Loading list...</p>;

  if (error)
    return <p className="font-normal text-2xl text-red-500">{error}</p>;

  // const categories = useMemo(() => {
  //   return ["all", ...new Set(latestPosts.map((p) => p.category))];
  // }, [latestPosts]);

  const handleCategory = (category) => {
    setSelectedCategory(category);
  };

  const categoryPosts = latestPosts.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory,
  );

  return (
    <div>
      <Section id="travel">
        <Latestitem />
        <div className="">
          <BtnFilter handleCategory={handleCategory} />
        </div>
        <div className="">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Cardlatest posts={categoryPosts} />
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default LatestExperiences;

const Latestitem = () => {
  return (
    <>
      {latestText.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className={item.titleClass}>{item.title}</h2>
          <p className={item.subtitle}>{item.subtitle}</p>
        </div>
      ))}
    </>
  );
};
