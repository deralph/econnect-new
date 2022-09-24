import React from "react";
import styles from "../../styles/navbar.module.css";

const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <img src="/econnectLogo.png" alt="" />
      <ul className={styles.signapp}>
        <li className={styles.navtext}>Download Now</li>
        <li>
          <img src="Google Play Store.png" alt="google play" />
        </li>
        <li>
          <img src="/App store.png" alt="app store" />
        </li>
      </ul>
    </nav>
  );
};

export default AppNav;
