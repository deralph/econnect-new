import React from "react";
import styles from "../../styles/chat/chat.module.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { GrAttachment } from "react-icons/gr";

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
      <div className={styles.chatLog}></div>
      <form className={styles.text}>
        <div className={styles.input}>
          <textarea type="text" placeholder="Type your message" />
          <GrAttachment className={styles.icon1} />
        </div>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
          }}
        > */}
        <TiArrowForward className={styles.icon2} />
        {/* </div> */}
      </form>
    </section>
  );
};

export default ChatSite;
