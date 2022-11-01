import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/eportal.module.css";
import BackArrow from "../../BackArrow";

const Eportal = ({ results }) => {
  return (
    <section className={`${style.center} ${styles.section}`}>
      <BackArrow noAdd heading={results ? "Results" : "E-Portal"} />
      <div className={styles.article}>
        {results ? "RESULTS PAGE" : "E-PORTAL PAGE"}
      </div>
    </section>
  );
};

export default Eportal;
