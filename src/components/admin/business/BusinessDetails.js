import React from "react";
import BusinessDeatail from "../../newsFeed/middle/business/BusinessDeatails";
import ActiveSub from "./ActiveSub";
import styles from "../../../styles/admin/business.module.css";

const BusinessDeatails = ({ disable }) => {
  return (
    <section className={`${styles.business} edit`}>
      {disable ? <BusinessDeatail disable /> : <BusinessDeatail approve />}
      <ActiveSub none />
    </section>
  );
};

export default BusinessDeatails;
