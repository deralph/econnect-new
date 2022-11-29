import React from "react";
import styles from "../../styles/navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import {
  FaToolbox,
  FaUserAlt,
  FaGraduationCap,
  FaUserFriends,
  FaBell,
  FaPowerOff,
  FaTimes,
} from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SideNav = ({ chat }) => {
  return (
    <div
      className={
        chat
          ? `left-0 w-auto bg-secondary h-screen basis-[5%] py-[10%] px-[0.8em]`
          : `left-0 w-auto bg-secondary h-screen basis-1/4 py-[10%] px-8`
      }
    >
      <ul>
        <li>
          <Link
            to={"/news-feed"}
            className="text-white text-init flex items-center py-[20px] px-[10px] border-b-[0.6px] border-solid border-white "
          >
            <AiFillHome className="mr-4" />
            {!chat && "Home"}
          </Link>
        </li>

        <li>
          <Link
            className="text-white text-init flex items-center py-[20px] px-[10px] border-b-[0.6px] border-solid border-white "
            to={"/academic-assistance"}
          >
            <FaGraduationCap className="mr-4" />
            {!chat && "Academic Assistance"}
          </Link>
        </li>

        <li>
          <Link
            className="text-white text-init flex items-center py-[20px] px-[10px] border-b-[0.6px] border-solid border-white "
            to={"/business"}
          >
            <FaToolbox className="mr-4" />
            {!chat && "Business"}
          </Link>
        </li>

        <li>
          <Link
            className="text-white text-init flex items-center py-[20px] px-[10px] border-b-[0.6px] border-solid border-white "
            to={"/profile"}
          >
            <FaUserAlt className="mr-4" />
            {!chat && "Profile"}
          </Link>
        </li>
        <li>
          <Link
            className="text-white text-init flex items-center py-[20px] px-[10px] border-b-[0.6px] border-solid border-white "
            to={"/login"}
          >
            <FaPowerOff className="mr-4" />
            {!chat && "Logout"}
          </Link>
        </li>
      </ul>
      <ul className="hidden">
        {" "}
        <FaTimes />
        <li>
          <Link
            className="text-white text-init flex items-center py-[20px] px-[10px] border-b-[0.6px] border-solid border-white "
            to={"/chat"}
          >
            <BsFillChatLeftTextFill className="mr-4" />
            {!chat && "Chat"}
          </Link>
        </li>
        <li>
          <Link
            className="text-white text-init flex items-center py-[20px] px-[10px] border-b-[0.6px] border-solid border-white "
            to={"/friends"}
          >
            <FaUserFriends className="mr-4" />
            {!chat && "Friends"}
          </Link>
        </li>
        <li>
          <Link
            className="text-white text-init flex items-center py-[20px] px-[10px] "
            to={"/notification"}
          >
            <FaBell className="mr-4" />
            {!chat && "Notification"}
          </Link>
        </li>
      </ul>
      <ul className="mt-8 hidden">
        <li className="py-[7px] px-[10px]">Download Now</li>
        <li className="py-[7px] px-[10px]">
          <img src="/appstore.png" className="h" alt="" />
        </li>
        <li className="py-[7px] px-[10px]">
          <img src="/googleplaystore.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export const NavContent = ({ Icon, title, chat }) => {
  return (
    <li>
      <Icon className="mr-4" />
      {chat !== "true" && title}
    </li>
  );
};

export default SideNav;
