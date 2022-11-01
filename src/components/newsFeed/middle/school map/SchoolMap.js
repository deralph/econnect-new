import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles1 from "../../../../styles/newsFeed/schoolmap.module.css";
import BackArrow from "../../BackArrow";

const SchoolMap = () => {
  return (
    <section className={`${style.center} ${styles1.section}`}>
      {" "}
      <BackArrow heading={"School Map"} noAdd />
      <img src="/map.png" alt="map illustration" />
    </section>
  );
};

export default SchoolMap;
