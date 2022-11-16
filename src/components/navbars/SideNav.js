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
          ? `${styles.sidenav} ${styles.side}`
          : `${styles.sidenav} ${styles.sidenav1}`
      }
    >
      <ul>
        <li>
          <Link to={"/news-feed"}>
            <AiFillHome className={styles.icon} />
            {!chat && "Home"}
          </Link>
        </li>

        <li>
          <Link to={"/academic-assistance"}>
            <FaGraduationCap className={styles.icon} />
            {!chat && "Academic Assistance"}
          </Link>
        </li>

        <li>
          <Link to={"/business"}>
            <FaToolbox className={styles.icon} />
            {!chat && "Business"}
          </Link>
        </li>

        <li>
          <Link to={"/profile"}>
            <FaUserAlt className={styles.icon} />
            {!chat && "Profile"}
          </Link>
        </li>
        <li>
          <Link to={"/login"}>
            <FaPowerOff className={styles.icon} />
            {!chat && "Logout"}
          </Link>
        </li>
      </ul>
      <ul>
        {" "}
        <FaTimes />
        <li>
          <Link to={"/chat"}>
            <BsFillChatLeftTextFill className={styles.icon} />
            {!chat && "Chat"}
          </Link>
        </li>
        <li>
          <Link to={"/friends"}>
            <FaUserFriends className={styles.icon} />
            {!chat && "Friends"}
          </Link>
        </li>
        <li>
          <Link to={"/notification"}>
            <FaBell className={styles.icon} />
            {!chat && "Notification"}
          </Link>
        </li>
      </ul>
      <ul>
        <li>Download Now</li>
        <li>
          <img src="/appstore.png" alt="" />
        </li>
        <li>
          <img src="/googleplaystore.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export const NavContent = ({ Icon, title, chat }) => {
  return (
    <li>
      <Icon className={styles.icon} />
      {chat !== "true" && title}
    </li>
  );
};

export default SideNav;
