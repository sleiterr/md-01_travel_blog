import React from "react";
import { Link } from "react-router-dom";
import { logo, home } from "../../assets/iconExports/index.js";

const postNav = () => {
  return (
    <>
      <header className="flex items-center justify-between py-4 px-8">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <p className="font-extrabold text-2xl text-secondary">
            PiligrimTales
          </p>
        </div>
        <Link className="group inline-flex cursor-pointer" to={"/"}>
          <img
            src={home}
            alt="home icon"
            className="w-10 h-10 group-hover:scale-110"
          />
        </Link>
      </header>
    </>
  );
};

export default postNav;
