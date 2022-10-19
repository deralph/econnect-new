import React from "react";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import styles from "../../../styles/newsFeed/chat.module.css";
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
      className={
        !chat
          ? `${styles.notification}`
          : `${styles.notification} ${styles.notification1}`
      }
    >
      {!chat && (
        <div className={styles.top}>
          <p>
            <BsFillChatLeftTextFill className={styles.chat} />
            Chats
          </p>
          <p>See All</p>
        </div>
      )}
      {chat && (
        <>
          <BackArrow heading={"Chats"} option={option} />
          <div className={styles.line}></div>
        </>
      )}
      <div className={styles.container}>
        {chatArray.map(({ img, name, message, seen, time }, index) => {
          return (
            <div className={`${styles.box} `} key={index}>
              <div className={styles.part}>
                <img src={img} alt={name} />
                <div>
                  <p className={styles.name}>
                    {name.length > 14 ? `${name.substr(0, 14)}...` : name}
                  </p>
                  <p className={styles.message}>
                    {message.length > 14
                      ? `${message.substr(0, 14)}...`
                      : message}
                  </p>
                </div>
              </div>
              <div className={styles.time}>
                <p className={styles.message}>{time}</p>
                {seen && <TiTick className={styles.tick} />}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Chat;
