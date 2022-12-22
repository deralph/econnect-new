import React from "react";
import SideNav from "../navbars/SideNav";
import RightSide from "../newsFeed/right/RightSide";
import Chats from "../newsFeed/right/Chat";
import ChatSite, { Non } from "./ChatSite";
import AppNav from "../navbars/AppNav";
import Profile from "../newsFeed/middle/profile/Profile";

const Chat = ({ profile, non }) => {
  return (
    <section className="auto relative bg-[#eee]">
      <AppNav chats />{" "}
      <div className="flex justify-between bg-[#eee] h-screen mt-14">
        <SideNav chat />
        <Chats chat />
        {profile ? <Profile chat /> : non ? <Non /> : <ChatSite />}
        <RightSide chat />
      </div>
    </section>
  );
};

export default Chat;
