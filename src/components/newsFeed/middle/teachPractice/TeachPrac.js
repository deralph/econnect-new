import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../../../styles/newsFeed/teachprac.module.css";

const TeachPrac = () => {
  return (
    <section>
      <h2>
        <FaArrowLeft
          className={styles.icon}
          style={{ color: "#4063D6", marginRight: "10px" }}
        />{" "}
        Teaching Practice{" "}
      </h2>
      <div className={styles.info}>
        <h3>Faculty of Education Students alone</h3>
        <p>Check your Teaching Practice Postings</p>
      </div>
      <img src="/rectangle 63.png" alt="school building pics" />
    </section>
  );
};

export default TeachPrac;
