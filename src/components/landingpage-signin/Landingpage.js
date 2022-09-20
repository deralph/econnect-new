import React from "react";
import LandingNav from "../navbars/LandingNav";
import styles from "../../styles/landingPage.module.css";

const Landingpage = () => {
  return (
    <section className={styles.section}>
      <LandingNav />
      <article className={styles.article}>
        <p className={styles.info}>
          Latest Updates and Information on <span>campus</span>
        </p>
        <div className={styles.download}>
          <p>download now</p>
          <div className={styles["download-images"]}>
            <img src="Google Play Store.png" alt="google play" />
            <img src="/App store.png" alt="app store" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Landingpage;
