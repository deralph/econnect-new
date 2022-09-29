import React from "react";
import Search from "./Search";
import styles from "../../styles/newsFeed/index.module.css";
import Notification from "./Notification";
import Chat from "./Chat";

const RightSide = () => {
  return (
    <div className={styles.right}>
      <Search />
      <Notification />
      <Chat />
    </div>
  );
};

export default RightSide;
