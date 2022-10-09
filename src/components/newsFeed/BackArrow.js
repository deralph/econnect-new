import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../styles/newsFeed/teachprac.module.css";
import styles1 from "../../styles/newsFeed/schoolmap.module.css";

const BackArrow = ({ heading }) => {
  return (
    <h2 className={styles1.head}>
      <FaArrowLeft
        className={styles.icon}
        style={{ color: "#4063D6", marginRight: "10px" }}
      />{" "}
      {heading}
    </h2>
  );
};

export default BackArrow;
