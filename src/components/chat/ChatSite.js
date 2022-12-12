import React from "react";
import styles from "../../styles/chat/chat.module.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { GrAttachment } from "react-icons/gr";
import { chat } from "../newsFeed/database";

const ChatSite = () => {
  return (
    // <section className={styles.chatSection}>
    <section className="h-[calc(100vh-1.5em)] basis-2/5 bg-white rounded overflow-scroll mt-3 mr-[2px] mb-2 ml-2 shadow-[0_4px_21_rgba(0,0,0,0.13)]">
      <article className="bg-[#092685] py-4 px-[5%]">
        <div className={styles.part}>
          <img src="/iconicUserPics.png" alt="user" />
          <div className="ml-4">
            <p className="font-semibold italic text-secondary text-xs capitalize text-leftfont-primary">
              Adetunji Oluwadamilola{" "}
            </p>
            <p className="mt-1 italic text-[10px] text-left">
              last seen today, 11:37am{" "}
            </p>
          </div>
        </div>
        <BiDotsVerticalRounded className="text-white text-2xl" />
      </article>
      <section className="h-auto overflow-scroll bg-white my-4 mx-auto w-[90%]">
        {chat.map(({ image, message, time }, index) => {
          return (
            <article
              key={index}
              className={`flex my-2 ${
                index % 2
                  ? "justify-end flex-row-reverse bg-[rgba(112,112,112,0.88)]"
                  : "bg-primary"
              }`}
            >
              <img src={image} alt={image} className="h-10 rounded-[50%]" />
              <div className="flex flex-col max-w-[70%]">
                <p className="rounded-[50px] font-secondary font-semibold py-6 px-4 text-white min-w[100px] text-[0.8em]">
                  {message}
                </p>
                <p className="font-secondary font-medium text-[#323232] text-[0.7em]">
                  {time}
                </p>
              </div>
            </article>
          );
        })}
      </section>
      <form className="bg-[#eee] justify-between items-centerflex py-4 px-[3%]">
        <div className="items-center bg-white flex w-[92%] rounded-[50px] p-4 justify-between border-[0.5px] border-solid border-[rgba(0,0,0,0.3)]">
          <textarea
            type="text"
            placeholder="Type your message"
            className="w-[92%] bg-transparent font-secondary font-medium text-xs h-auto text-[rgba(0,0,0,0.7)]"
          />
          <GrAttachment className="text-[#323232] text-base" />
        </div>

        <TiArrowForward className="bg-primary p-1 text-[2em] text-white rounded-[50%] shadow-[0_3.5px_201px_rgba(64,99,214,0.4)]" />
      </form>
    </section>
  );
};

export const Non = () => {
  return (
    <section className={styles.non}>
      <h1>Select a Chat to start conversation</h1>
    </section>
  );
};

export default ChatSite;
