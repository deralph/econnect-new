import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../../styles/navbar.module.css";

const AppNav = () => {
  return (
    <nav className={styles.nav} style={{ background: "#fff" }}>
      {/* <GiHamburgerMenu className={styles.burger} /> */}
      <img src="/econnectLogo.png" alt="" />
      <ul className={styles.signapp}>
        <li className={styles.navtext}>Download Now</li>
        <li>
          <img src="/GooglePlayStore.png" alt="google play" />
        </li>
        <li>
          <img src="/Appstore.png" alt="app store" />
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
