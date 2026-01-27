import React from "react";
import clsx from "clsx";
import { star } from "../../assets/iconExports/index.js";
import { IoIosArrowRoundForward } from "react-icons/io";
import aboutImg from "../../../public/Latest/santorini.gif";
import Section from "../Section/Section.jsx";
import Button from "../Button/Button.jsx";
import BlurText from "../animation/BlurText.jsx";

const aboutText = [
  {
    id: 1,
    title: "Solnedgang i Santorini: En Drøm Bliver til Virkelighed",
    text: "  Da jeg ankom til Santorini, vidste jeg, at dette ville blive et af højdepunkterne på min rejse. De hvide huse med de ikoniske blå kupler, de smalle gader og ikke mindst de utrolige solnedgang har gjort dette sted verdensberømt...",
    titleClass: "font-semibold text-3xl max-w-110 tracking-wide mb-4",
    textClass: "font-normal text-lg tracking-wide max-w-136",
  },
];

const About = () => {
  return (
    <Section id="om">
      <div
        className={clsx(
          "grid grid-cols-2",
          "bg-box-about rounded-xl overflow-hidden",
        )}
      >
        <div className="relative">
          <span
            className={clsx(
              "absolute top-6 left-8 flex items-center",
              "bg-badge-about px-3.5 py-2.5 rounded-md",
              "font-semibold text-sm text-white",
            )}
          >
            <img src={star} alt="star" className="w-5 h-4.5 mr-2" /> Fremhævet
          </span>
          <img
            src={aboutImg}
            alt="santorini"
            className={clsx("w-full h-190", "object-cover rounded-l-xl")}
          />
        </div>
        <div className="flex flex-col justify-center h-full px-8 py-44">
          <div className="self-start flex flex-col h-full">
            <div
              className={clsx(
                "flex items-center gap-4",
                "font-medium text-base text-white",
              )}
            >
              <span className={clsx("bg-span-about px-5 py-1 rounded-full")}>
                Byliv
              </span>
              <p>15.Maj 2024</p>
            </div>
            <AboutItem />
            <div className="">
              <Button
                className={clsx(
                  "py-2! inline-flex items-center gap-2",
                  "bg-about-btn! hover:bg-about-btn-hover!",
                )}
              >
                Læs Mere
                <IoIosArrowRoundForward className="text-white text-3xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

const AboutItem = () => {
  return (
    <>
      {aboutText.map((item, index) => (
        <div key={item.id} className="mt-auto mb-auto">
          <h2 className={item.titleClass}>{item.title}</h2>
          <BlurText
            as="p"
            duration={1.2}
            delay={0.4 + index * 0.15}
            className={item.textClass}
          >
            {item.text}
          </BlurText>
        </div>
      ))}
    </>
  );
};
