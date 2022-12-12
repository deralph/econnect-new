import React from "react";
import SideNav from "../navbars/SideNav";
import RightSide from "../newsFeed/right/RightSide";
import styles from "../../styles/chat/chat.module.css";
import Chats from "../newsFeed/right/Chat";
import ChatSite, { Non } from "./ChatSite";
import AppNav from "../navbars/AppNav";
import style from "../../styles/newsFeed/index.module.css";
import Profile from "../newsFeed/middle/profile/Profile";

const Chat = ({ profile, non }) => {
  return (
    <section className="auto relative bg-[#eee]">
      <AppNav />{" "}
      <div
        className="flex justify-between bg-[#eee] h-screen mt-14"
        // style={{ display: "flex", paddingTop: "55px" }}
      >
        <SideNav chat />
        <Chats chat />
        {profile ? <Profile chat /> : non ? <Non /> : <ChatSite />}
        <RightSide chat />
      </div>
    </section>
  );
};

export default Chat;
