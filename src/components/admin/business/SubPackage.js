import React from "react";
import BackArrow from "../../newsFeed/BackArrow";
import { subscriptionPlan } from "../../newsFeed/database";
import styles from "../../../styles/admin/business.module.css";

const SubPackage = () => {
  return (
    <section className="edit">
      <BackArrow heading={"Subscription Packages"} />
      <article className={styles.package}>
        {subscriptionPlan.map(({ plan, description, monthly, yearly }) => {
          return (
            <div className={styles.each} key={plan}>
              <p className={styles.head}>{plan}</p>
              <div className={styles.content}>
                <p className={styles.desc}>{description}</p>
                <button
                  style={{ background: "#08b839" }}
                >{`${monthly}/Month`}</button>
                <button
                  style={{ background: "#4063D6" }}
                >{`${yearly}/Year`}</button>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default SubPackage;
