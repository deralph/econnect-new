import React from "react";
import styles from "../../styles/chat/chat.module.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { GrAttachment } from "react-icons/gr";
import { chat } from "../newsFeed/database";

const ChatSite = () => {
  return (
    <section className={styles.chatSection}>
      <article className={styles.head}>
        <div className={styles.part}>
          <img src="/iconicUserPics.png" alt="user" />
          <div>
            <p className={styles.name}>Adetunji Oluwadamilola </p>
            <p className={styles.message}>last seen today, 11:37am </p>
          </div>
        </div>
        <BiDotsVerticalRounded className={styles.icon} />
      </article>
      <section className={styles.chatLog}>
        {chat.map(({ image, message, time }, index) => {
          return (
            <article key={index}>
              <img src={image} alt={image} />
              <div>
                <p>{message}</p>
                <p className={styles.time}>{time}</p>
              </div>
            </article>
          );
        })}
      </section>
      <form className={styles.text}>
        <div className={styles.input}>
          <textarea type="text" placeholder="Type your message" />
          <GrAttachment className={styles.icon1} />
        </div>

        <TiArrowForward className={styles.icon2} />
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
