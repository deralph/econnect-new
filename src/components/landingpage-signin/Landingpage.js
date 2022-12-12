import React from "react";
import LandingNav from "../navbars/LandingNav";
import styles from "../../styles/landingPage.module.css";

const Landingpage = () => {
  return (
    <section className={styles.section}>
      <LandingNav />
      <article className="flex justify-between items-center pt-[5%] px-[10%] ">
        <article>
          <p className="text-secondary text-[2em] text-left w-80 leading-[50px] ">
            Latest Updates and Information on{" "}
            <span className="uppercase block font-bold text-[1.8]">campus</span>
          </p>
          <div className="mt-8">
            <p className="text-[#1e1e1e] text-sm font-medium capitalize">
              download now
            </p>
            {/* <div className={styles["download-images"]}> */}
            <div className="w-72 flex justify-between">
              <img src="GooglePlayStore.png" alt="google play" />
              <img src="/Appstore.png" alt="app store" />
            </div>
          </div>
        </article>
        <img
          src="/landingpagephone.png"
          alt="landing page phone"
          className="h-[90vh] w-[30vw]"
        />
      </article>
    </section>
  );
};

export default Landingpage;
