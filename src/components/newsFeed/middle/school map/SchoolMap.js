import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import style1 from "../../../../styles/newsFeed/acad.module.css";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../../../styles/newsFeed/teachprac.module.css";
import styles1 from "../../../../styles/newsFeed/schoolmap.module.css";

const SchoolMap = () => {
  return (
    <section className={`${style.center} ${styles1.section}`}>
      {" "}
      <h2 className={style1.head}>
        <FaArrowLeft
          className={styles.icon}
          style={{ color: "#4063D6", marginRight: "10px" }}
        />{" "}
        School Map{" "}
      </h2>
      <img src="/map.png" alt="map illustration" />
    </section>
  );
};

export default SchoolMap;
