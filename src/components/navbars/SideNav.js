import React from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navActions } from "../../store/sidenav.slice";
import { logout } from "../../store/auth-action";

const SideNav = ({ chat }) => {
  const dispatch = useDispatch();
  const navValue = useSelector((state) => state.nav);
  const { chat: chat_, main } = navValue;

  const navigate = useNavigate();

  const logOut = () => {
    dispatch(logout());
    dispatch(navActions.main_());
    navigate("/login");
  };

  return (
    <div
      className={`transition-transform overflow-scroll left-0 w-auto bg-secondary h-screen  ${
        chat
          ? ` basis-[8%] lg:basis-[12%] md:basis-[18%] py-[10%] px-[0.8em] ${
              chat_ ? "sml:block absolute top-[-55px] z-40" : "sml:hidden"
            }`
          : ` basis-1/4 py-[10%] px-8 lg:basis-[35%] ${
              main
                ? "sml:block absolute top-0 z-40 h-full w-screen"
                : "sml:hidden"
            }`
      } `}
    >
      <FaTimes
        className="sml:block hidden text-white absolute top-4 left-4"
        onClick={() => dispatch(navActions.main_())}
      />
      <ul className="mt-6">
        <li
          className={`text-red-500 text-init flex items-center py-[20px] px-[10px] lg:p-4 ${
            chat && "justify-center "
          }`}
          onClick={() => logOut()}
        >
          <FaPowerOff
            className={`mr-4 ${chat && "text-[2.5em]"}text-red-500`}
          />
          {!chat && "Logout"}
        </li>
        <li onClick={() => dispatch(navActions.main_())}>
          <Link
            to={"/news-feed"}
            className={`text-white text-init flex items-center py-[20px] px-[10px] lg:p-4 border-b-[0.6px] border-solid border-white ${
              chat && "justify-center"
            } `}
          >
            <AiFillHome className={`mr-4 ${chat && "text-[2em]"}`} />
            {!chat && "Home"}
          </Link>
        </li>

        <li onClick={() => dispatch(navActions.main_())}>
          <Link
            className={`text-white text-init flex items-center py-[20px] px-[10px] lg:p-4 border-b-[0.6px] border-solid border-white ${
              chat && "justify-center"
            } `}
            to={"/academic-assistance"}
          >
            <FaGraduationCap className={`mr-4 ${chat && "text-[2em]"}`} />
            {!chat && "Academic Assistance"}
          </Link>
        </li>

        <li onClick={() => dispatch(navActions.main_())}>
          <Link
            className={`text-white text-init flex items-center py-[20px] px-[10px] lg:p-4 border-b-[0.6px] border-solid border-white ${
              chat && "justify-center"
            } `}
            to={"/business"}
          >
            <FaToolbox className={`mr-4 ${chat && "text-[2em]"}`} />
            {!chat && "Business"}
          </Link>
        </li>

        <li onClick={() => dispatch(navActions.main_())}>
          <Link
            className={`text-white text-init flex items-center py-[20px] px-[10px] lg:p-4 border-b-[0.6px] border-solid border-white ${
              chat && "justify-center"
            } `}
            to={"/profile"}
          >
            <FaUserAlt className={`mr-4 ${chat && "text-[2em]"}`} />
            {!chat && "Profile"}
          </Link>
        </li>
      </ul>
      <ul className="hidden lg:block">
        {" "}
        <li className={`${chat && "hidden"}`}>
          <Link
            className={`text-white text-init flex items-center py-[20px] px-[10px] lg:p-4 border-b-[0.6px] border-solid border-white ${
              chat && "justify-center"
            } `}
            to={"/chat"}
          >
            <BsFillChatLeftTextFill
              className={`mr-4 ${chat && "text-[2em]"}`}
            />
            {!chat && "Chat"}
          </Link>
        </li>
        <li onClick={() => dispatch(navActions.main_())}>
          <Link
            className={`text-white text-init flex items-center py-[20px] px-[10px] lg:p-4 border-b-[0.6px] border-solid border-white ${
              chat && "justify-center"
            } `}
            to={"/friends"}
          >
            <FaUserFriends className={`mr-4 ${chat && "text-[2em]"}`} />
            {!chat && "Friends"}
          </Link>
        </li>
        <li onClick={() => dispatch(navActions.main_())}>
          <Link
            className={`text-white text-init flex items-center py-[20px] px-[10px] lg:p-4 ${
              chat && "justify-center"
            }`}
            to={"/notification"}
          >
            <FaBell className={`mr-4 ${chat && "text-[2em]"}`} />
            {!chat && "Notification"}
          </Link>
        </li>
      </ul>
      <ul className={`mt-9 hidden lg:block  ${chat && "hidden lg:hidden"} `}>
        <li className="py-[7px] px-[10px] text-white">Download Now</li>
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
      <Icon className={`mr-4 ${chat && "text-[2em]"}`} />
      {chat !== "true" && title}
    </li>
  );
};

export default SideNav;
