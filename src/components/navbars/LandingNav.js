import React from "react";
import { FaUserAlt } from "react-icons/fa";
import FadeMenu from "./FadeMenu";

const LandingNav = () => {
  return (
    <nav className="flex justify-between items-center w-screen fixed top-0 py-2 px-[5%] z-10">
      <img src="/econnectLogo.png" alt="econnect logo" className="h-8" />
      <ul className="flex items-center sm:hidden">
        <li className="text-init capitalize text-white py-[10px] px-8">
          login
        </li>
        <li className="bg-[#9e1c33] rounded-lg shadow-2xl text-init capitalize text-white py-[10px] px-8">
          register
        </li>
      </ul>
      <FaUserAlt className="text-white sm:block hidden" />
      <FadeMenu />
    </nav>
  );
};

export default LandingNav;
