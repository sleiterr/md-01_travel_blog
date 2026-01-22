import React, { useEffect, useState } from "react";
import { IoLogoYoutube } from "react-icons/io";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const FooterSocials = () => {

  return (
    <>
      <h4 className="font-bold text-base text-primary-footer tracking-wide mb-4">
        Følg Med
      </h4>
      <div className="flex items-center gap-4 mb-4">
        <a href="#">
          <FaInstagram className="w-8 h-8" />
        </a>
        <a href="#">
          <IoLogoYoutube className="w-8 h-8" />
        </a>
        <a href="#">
          <FaTiktok className="w-8 h-8" />
        </a>
      </div>
    </>
  );
};

export default FooterSocials;
