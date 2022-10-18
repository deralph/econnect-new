import React from "react";
import Search from "./Search";
import styles from "../../../styles/newsFeed/index.module.css";
import Notification from "./Notification";
import Chat from "./Chat";
import Friends from "./Friends";

const RightSide = ({ notification }) => {
  return (
    <div className={styles.right}>
      <Search />
      {notification ? <Friends /> : <Notification />}
      <Chat />
    </div>
  );
};

export default RightSide;
