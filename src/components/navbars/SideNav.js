import React from "react";
import styles from "../../styles/navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaToolbox, FaUserAlt, FaGraduationCap } from "react-icons/fa";

const SideNav = ({ chat }) => {
  return (
    <ul
      className={
        chat
          ? `${styles.sidenav} ${styles.side}`
          : `${styles.sidenav} ${styles.sidenav1}`
      }
    >
      <NavContent
        Icon={AiFillHome}
        title="Home"
        chat={chat ? "true" : "false"}
      />
      <NavContent
        Icon={FaGraduationCap}
        title="Academic Assistance"
        chat={chat ? "true" : "false"}
      />
      <NavContent
        Icon={FaToolbox}
        title="Business"
        chat={chat ? "true" : "false"}
      />
      <NavContent
        Icon={FaUserAlt}
        title="Profile"
        chat={chat ? "true" : "false"}
      />
    </ul>
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
