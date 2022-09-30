import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/eportal.module.css";

const Eportal = ({ results }) => {
  return (
    <section className={`${style.center} ${styles.section}`}>
      <h2>
        <FaArrowLeft
          className={styles.icon}
          style={{ color: "#4063D6", marginRight: "10px" }}
        />{" "}
        {results ? "Results" : "e-portal"}
      </h2>
      <div className={styles.article}>
        {results ? "RESULTS PAGE" : "E-PORTAL PAGE"}
      </div>
    </section>
  );
};

export default Eportal;
