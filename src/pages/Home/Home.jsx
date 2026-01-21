import React from "react";
import Navbar from "../../components/header/NavBar.jsx";
import Hero from "../../components/hero/Hero.jsx";
import StatisticsPanel from "../../components/StatisticsPanel/StatisticsPanel.jsx";
import About from "../../components/about/About.jsx";
import LatestExperiences from "../../components/LatestExperiences/LatestExperiences.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatisticsPanel />
      <About />
      <LatestExperiences />
      <Footer />
    </>
  );
};

export default Home;
