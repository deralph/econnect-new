import React from "react";
import Mind from "./Mind";
import styles from "../../../../styles/newsFeed/index.module.css";
import Feed from "./Feed";

const Center = () => {
  return (
    <div className={styles.center}>
      <Mind />
      <Feed />
    </div>
  );
};

export default Center;
