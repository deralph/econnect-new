import React from "react";
import styles from "../../styles/navbar.module.css";
import { AiFillHome } from "react-icons/ai";
import { FaToolbox, FaUserAlt, FaGraduationCap } from "react-icons/fa";

const SideNav = () => {
  return (
    <ul className={styles.sidenav}>
      <NavContent Icon={AiFillHome} title="Home" />
      <NavContent Icon={FaGraduationCap} title="Academic Assistance" />
      <NavContent Icon={FaToolbox} title="Business" />
      <NavContent Icon={FaUserAlt} title="Profile" />
    </ul>
  );
};

export const NavContent = ({ Icon, title }) => {
  return (
    <li>
      <Icon className={styles.icon} />
      {title}
    </li>
  );
};

export default SideNav;
