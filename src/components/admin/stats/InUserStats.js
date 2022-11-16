import React from "react";
import BackArrow from "../../newsFeed/BackArrow";
import styles from "../../../styles/admin/stats.module.css";

const InUserStats = () => {
  return (
    <section className={`${styles.cont} edit`}>
      <BackArrow heading={"Adetunji Oluwadamilola"} />
      <article className={styles.instat}>
        <p>Usage Statistics</p>
        <div>
          <Inner color={"#4063D6"} time="70mins" info={"Average Usage Time"} />
          <Inner
            color={"linear-gradient(180deg, #039B2D 0%, #03571B 100%)"}
            time="24hrs"
            info={"Last Login"}
          />
        </div>
      </article>
      <article className={styles.instat}>
        <p>Usage Breakdown</p>
        <div>
          <Inner color={"rgba(7, 23, 75, 0.81)"} time="35mins" info={"Chat"} />
          <Inner color={"#B5700A"} time="10mins" info={"Academic Asst."} />
          <Inner color={" rgba(86, 55, 8, 0.81)"} time="5mins" info={"Home"} />
          <Inner color={"#8C1228"} time="10mins" info={"Business"} />
          <Inner
            color={"rgba(33, 14, 9, 0.85)"}
            time="10mins"
            info={"Friends"}
          />
        </div>
      </article>
    </section>
  );
};

const Inner = ({ color, time, info }) => {
  return (
    <div className={styles.incard} style={{ background: `${color}` }}>
      <p>{time}</p>
      <p>{info}</p>
    </div>
  );
};
export default InUserStats;
