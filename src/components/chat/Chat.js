import React from "react";
import SideNav from "../navbars/SideNav";
import RightSide from "../newsFeed/right/RightSide";
import styles from "../../styles/chat/chat.module.css";
import Chats from "../newsFeed/right/Chat";
import ChatSite from "./ChatSite";
import AppNav from "../navbars/AppNav";
import style from "../../styles/newsFeed/index.module.css";
import Profile from "../newsFeed/middle/profile/Profile";

const Chat = ({ chat }) => {
  return (
    <section className={style.section}>
      <AppNav />{" "}
      <div
        className={styles.chat}
        style={{ display: "flex", paddingTop: "55px" }}
      >
        <SideNav chat />
        <Chats chat />
        {chat ? <Profile chat /> : <ChatSite />}
        <RightSide chat />
      </div>
    </section>
  );
};

export default Chat;
