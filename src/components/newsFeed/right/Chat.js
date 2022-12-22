import React from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import BackArrow from "../BackArrow";
import { chatArray } from "../database";

const Chat = ({ chat }) => {
  const option = [
    {
      main: "New Chat",
      color: "#4063D6",
    },
  ];

  return (
    <article
      className={`bg-white rounded relative my=[5px] overflow-scroll  shadow-[10px_10px_10px_black-100)] ${
        !chat ? `basis-[43%]` : `basis-1/4 lg:basis-[28%] md:hidden`
      }`}
    >
      {!chat && (
        <div className="top">
          <p className=" flex items-center font-secondary font-medium text-sm text-primary">
            <BsFillChatLeftTextFill className="text-base mr-3" />
            Chats
          </p>
          <p className="font-secondary font-medium text-sm text-primary">
            See All
          </p>
        </div>
      )}
      {chat && (
        <>
          <BackArrow heading={"Chats"} option={option} />
          <div className="w-[90%] m-auto border-b-[0.5px] border-solid border-b-[#32323240] "></div>
        </>
      )}
      <div className="px-4">
        {chatArray.map(({ img, name, message, seen, time }, index) => {
          return (
            <div
              className="flex py-3 justify-between items-center border-b-[0.58px] border-solid border-b-black-100"
              key={index}
            >
              <div className="flex">
                <img
                  src={img}
                  alt={name}
                  className="h-12 w-12 mr-3 rounded-[50%]"
                />
                <div className="justify-between flex-col">
                  <p className="font-semibold  text-secondary text-xs capitalize text-left font-primary">
                    {name.length > 14 ? `${name.substr(0, 14)}...` : name}
                  </p>
                  <p className="mt-1  text-[10px] text-left">
                    {message.length > 14
                      ? `${message.substr(0, 14)}...`
                      : message}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-end flex-col">
                <p className="mt-1 italic text-[10px] text-left text-[#323232]">
                  {time}
                </p>
                {seen && <TiTick className="text-[#323232] start" />}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Chat;
