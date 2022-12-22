import React, { useRef } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { GrAttachment } from "react-icons/gr";
import { chat } from "../newsFeed/database";

const ChatSite = () => {
  return (
    // <section className={styles.chatSection}>
    <section className="relative h-[calc(100vh-1.5em)] basis-2/5 lg:basis-3/5 md:basis-[80%] sml:basis-full bg-white rounded overflow-scroll mt-3 mr-[2px] mb-2 ml-2 shadow-[0_4px_21_rgba(0,0,0,0.13)]">
      <article className="bg-[#092685] py-4 px-[5%]">
        {/* <div className={styles.part}> */}
        <div className="flex justify-between items-center">
          <div className="items-center flex">
            <img src="/iconicUserPics.png" alt="user" />
            <div className="ml-4">
              <p className="font-secondary font-semibold text-lg text-white">
                Adetunji Oluwadamilola{" "}
              </p>
              <p className="font-secondary font-medium text-xs text-[#FFFFFFCC]">
                last seen today, 11:37am{" "}
              </p>
            </div>
          </div>
          <BiDotsVerticalRounded className="text-white text-2xl" />
        </div>
      </article>
      <section className="h-auto overflow-scroll bg-white my-4 mx-auto mb-[120px] w-[90%]">
        {chat.map(({ image, message, time }, index) => {
          return (
            <article
              key={index}
              className={`flex my-2 items-start w-full ${
                index % 2 ? "justify-start  flex-row-reverse " : ""
              }`}
            >
              <img src={image} alt={image} className="h-10 rounded-[50%]" />
              <div
                className={`flex flex-col max-w-[70%] ${
                  index % 2 ? "mr-4" : "ml-4"
                }`}
              >
                <p
                  className={`rounded-[30px] font-secondary font-semibold py-4 px-4 text-black min-w-[100px] text-[0.8em] whitespace-pre-wrap break-words ${
                    index % 2
                      ? "justify-end flex-row-reverse bg-[#707070E0]"
                      : "bg-primary"
                  }`}
                >
                  {message}
                </p>
                <p className="font-secondary mx-4 font-medium text-[#323232] text-[0.7em]">
                  {time}
                </p>
              </div>
            </article>
          );
        })}
      </section>
      <form className="bg-[#eee] justify-between items-center flex py-4 px-[3%] fixed bottom-0 w-[40%] lg:w-[60%] md:w-[80%] sml:w-full">
        <div className="items-center bg-white flex w-[92%] rounded-[50px] p-4 justify-between border-[0.5px] border-solid border-[rgba(0,0,0,0.3)]">
          <textarea
            type="text"
            placeholder="Type your message"
            className="w-[90%] bg-transparent font-secondary font-medium text-xs h-auto text-[rgba(0,0,0,0.7)]"
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
    <section className="grid place-content-center basis-2/5 lg:basis-3/5 md:basis-[80%] sml:basis-full bg-white rounded h-[calc(100vh-1.5em) mt-3 mr-1 ml-2 mb-2 shadow-[0_4_21_rgba(0,0,0,0.13)]]">
      <h1 className="font-primary font-normal text-[1.5em] text-center text-primary w-[70%] m-auto">
        Select a Chat to start conversation
      </h1>
    </section>
  );
};

export default ChatSite;
