import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../../styles/navbar.module.css";

const AppNav = () => {
  return (
    // <nav className={styles.nav} style={{ background: "#fff" }}>
    <nav className="bg-white flex justify-between items-center w-screen fixed top-0 py-2 px-[5%] z-10">
      <GiHamburgerMenu className="burger" />

      <img src="/econnectLogo.png" alt="" className="h-8" />
      <ul className="flex items-center">
        <li className="text-secondary italic font-bold">Download Now</li>
        <li>
          <img
            src="/GooglePlayStore.png"
            alt="google play"
            className="h-8 ml-4"
          />
        </li>
        <li>
          <img src="/Appstore.png" alt="app store" className="h-8 ml-4 " />
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
