import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdowns from "./Dropdown";
import FadeMenu from "./FadeMenu";

const LandingNav = () => {
  const option = [
    {
      main: "login",
    },
    {
      main: "register",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-screen fixed top-0 py-2 px-[5%] z-10">
      <img src="/econnectLogo.png" alt="econnect logo" className="h-8" />
      <ul className="flex items-center sm:hidden">
        <li className="text-init capitalize text-white py-[10px] px-8">
          <Link to="/login">Login</Link>{" "}
        </li>
        <li className="bg-[#9e1c33] rounded-lg shadow-2xl text-init capitalize text-white py-[10px] px-8">
          <Link to="/login">Register</Link>{" "}
        </li>
      </ul>
      {/* <FaUserAlt className="text-white sm:block hidden" /> */}
      {/* <Dropdowns /> */}
      <div className=" sm:block hidden">
        <FadeMenu option={option} nav />
      </div>
    </nav>
  );
};

export default LandingNav;
