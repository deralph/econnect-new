import React from "react";
import styles from "../../styles/navbar.module.css";

const LandingNav = () => {
  return (
    <nav className="flex justify-between items-center w-screen fixed top-0 py-2 px-[5%] z-10">
      <img src="/econnectLogo.png" alt="econnect logo" className="h-8" />
      <ul className="flex items-center">
        <li className="text-init capitalize text-white py-[10px] px-8">
          login
        </li>
        <li className="bg-[#9e1c33] rounded-lg shadow-2xl text-init capitalize text-white py-[10px] px-8">
          register
        </li>
      </ul>
    </nav>
  );
};

export default LandingNav;
