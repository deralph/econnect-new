import React from "react";
import styles from "../../../styles/admin/business.module.css";

const ActiveSub = ({ none }) => {
  return (
    <section className={styles.subBox}>
      <h2>Active Subscription </h2>
      {none && (
        <>
          <p>There is not active subscription for this business</p>
          <button>Subscribe for business</button>
        </>
      )}
    </section>
  );
};

export default ActiveSub;
