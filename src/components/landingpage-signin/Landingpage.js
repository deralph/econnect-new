import React from "react";
import LandingNav from "../navbars/LandingNav";
import styles from "../../styles/landingPage.module.css";

const Landingpage = () => {
  return (
    <section className={styles.section}>
      <LandingNav />
      <article className="flex justify-between items-center pt-[5%] px-[10%] sm:pt-[15%] sm:grid sm:place-content-center sm:h-screen">
        <article className="sm:w-full">
          <p className="text-secondary text-[2em] text-left w- leading-[50px] sm:w-auto sm:text-base ">
            Latest Updates and <br /> Information on{" "}
            <span className="uppercase block font-bold text-[1.8]">campus</span>
          </p>
          <div className="mt-8">
            <p className="text-[#1e1e1e] text-sm font-medium capitalize">
              download now
            </p>
            {/* <div className={styles["download-images"]}> */}
            <div className="w-72 flex justify-between sm:flex-col sm:items-start">
              <img
                src="GooglePlayStore.png"
                alt="google play"
                className="sm:h-8 sm:mt-1"
              />
              <img
                src="/Appstore.png"
                alt="app store"
                className="sm:h-8 sm:mt-1"
              />
            </div>
          </div>
        </article>
        <img
          src="/landingpagephone.png"
          alt="landing page phone"
          className="h-[90vh] w-[30vw] sm:hidden"
        />
      </article>
    </section>
  );
};

export default Landingpage;
