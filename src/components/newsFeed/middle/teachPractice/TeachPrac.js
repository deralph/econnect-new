import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../../../styles/newsFeed/teachprac.module.css";
import style from "../../../../styles/newsFeed/index.module.css";
import style1 from "../../../../styles/newsFeed/acad.module.css";

const TeachPrac = ({ nysc }) => {
  return (
    <section className={`${style.center} ${style1.center}`}>
      <h2 className={style1.head}>
        <FaArrowLeft
          className={styles.icon}
          style={{ color: "#4063D6", marginRight: "10px" }}
        />{" "}
        {nysc ? "NYSC Senate Lists " : "Teaching Practice"}
      </h2>
      <div
        className={nysc ? `${styles.info} ${styles.nysc}` : `${styles.info}`}
      >
        <div>
          <h3>
            {nysc
              ? "NYSC APPROVED LIST"
              : "Faculty of Education Students alone"}
          </h3>
          <p>
            {nysc
              ? "Check Newly Added Senate List For AAUA"
              : "Check your Teaching Practice Postings"}
          </p>
        </div>
      </div>
      <div className={styles.posting}>
        <p>Matric Number:</p>
        <form>
          <input type="text" placeholder="170404110" />
          <button>View Posting</button>
        </form>
        <div className={styles.box}>{nysc ? "Status" : "Your Posting :"}</div>
      </div>
    </section>
  );
};

export default TeachPrac;
