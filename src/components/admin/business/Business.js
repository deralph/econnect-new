import React from "react";
import BusinessDeatails from "../../newsFeed/middle/business/BusinessDeatails";
import ActiveSub from "./ActiveSub";
import styles from "../../../styles/admin/business.module.css";

const Business = () => {
  return (
    <section className={styles.business}>
      <BusinessDeatails />
      <ActiveSub none />
    </section>
  );
};

export default Business;
