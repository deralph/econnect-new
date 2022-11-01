import React from "react";
import styles from "../../../styles/admin/business.module.css";

const ActiveSub = ({ none, done }) => {
  return (
    <section className={styles.subBox}>
      <h2 className={styles.info}>Active Subscription </h2>
      {none ? (
        <p>There is not active subscription for this business</p>
      ) : (
        <div className={styles.plan}>
          <p>BASIC PLAN</p>
          <button className={styles.sub}>N12000/Year</button>
          <p>Expires January, 2023</p>
          <button className={styles.active}>active</button>
        </div>
      )}

      <button className={styles.btn}>
        {done ? "Upgrade Package" : "Subscribe for business"}
      </button>
    </section>
  );
};

export default ActiveSub;
