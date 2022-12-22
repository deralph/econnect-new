import React from "react";
import Search from "./Search";
import Notification from "./Notification";
import Chat from "./Chat";
import Friends from "./Friends";

const RightSide = ({ notification, chat }) => {
  return (
    <div
      className={`basis-1/4 right-0 h-screen  flex flex-col p-[5px] justify-evenly lg:hidden ${
        chat && `block`
      }`}
    >
      <Search />
      {notification ? <Friends /> : <Notification />}
      {chat ? <Friends /> : <Chat />}
    </div>
  );
};

export default RightSide;
