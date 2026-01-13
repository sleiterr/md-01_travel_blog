import React from "react";
import { Link } from "react-router-dom";
import { location } from "../../assets/iconExports/index.js";
import heroBg from "../../assets/bgHero/hero.gif";
import StatBox from "./StatBox";
import Button from "../Button/Button";

const heroText = [
  {
    id: 1,
    title: "Mit Sabbatår Eventyr",
    subtitle:
      "Følg med på min rejse rundt om verden, hvor jeg opdager nye kulturer, møder fantastiske mennesker og skaber minder for livet.",
    titleClass: "font-bold text-primary text-5xl py-4",
    subtitleClass: "font-normal text-lg text-secondary text-2xl w-[34rem]",
  },
];

const Hero = () => {
  return (
    <section
      className="relative w-full min-w-[320px] h-screen lg:h-auto bg-cover bg-no-repeat bg-center md:aspect-8/5"
      id="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-hero-overlay"></div>
      <div className="absolute inset-0 top-16 grid grid-cols-2 justify-start p-16 w-full">
        <div className="flex flex-col items-start justify-center w-2xl">
          <div className="flex items-center mb-4 gap-3 bg-hero-badge rounded-md px-4 py-2  text-white font-light">
            <img src={location} alt="location icon" />
            <p>Aktuelt i: Bangkok, Thailand</p>
          </div>
          <HeroItem />
          <Button to="#">Læs Mine Historier</Button>
        </div>
        <div className="items-end justify-end flex">
          <StatBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;

const HeroItem = () => {
  return (
    <div>
      {heroText.map((item) => (
        <div key={item.id} className="flex flex-col items-start justify-center">
          {item.element}
          <h1 className={item.titleClass}>{item.title}</h1>
          <h2 className={item.subtitleClass}>{item.subtitle}</h2>
        </div>
      ))}
    </div>
  );
};
