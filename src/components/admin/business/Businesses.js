import React from "react";
import { FaSearch } from "react-icons/fa";
import Business from "../../newsFeed/middle/business/Business";
import styles from "../../../styles/admin/business.module.css";

const Businesses = () => {
  return (
    <section className="edit">
      <div className={styles.bus}>
        <h2>Business</h2>
        <div>
          <input type="text" placeholder="Search business" />
          <FaSearch className={styles.search} />
        </div>
      </div>
      <article className={styles.main}>
        <div className={styles.smallBus}>
          <Business admin />
        </div>{" "}
        <div className={styles.smallBus}>
          <p className={styles.smallBusP}>Approval Request (21)</p>
          <Business admin small />
        </div>
      </article>
    </section>
  );
};

export default Businesses;
