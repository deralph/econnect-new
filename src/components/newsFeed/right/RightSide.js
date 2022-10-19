import React from "react";
import Search from "./Search";
import styles from "../../../styles/newsFeed/index.module.css";
import Notification from "./Notification";
import Chat from "./Chat";
import Friends from "./Friends";

const RightSide = ({ notification, chat }) => {
  return (
    <div className={styles.right}>
      <Search />
      {notification ? <Friends /> : <Notification />}
      {chat ? <Friends /> : <Chat />}
    </div>
  );
};

export default RightSide;
