import React from "react";
import styles from "../../styles/newsFeed.module.css";
import { FaBell } from "react-icons/fa";

const notificationArray = [
  {
    img: "/Ellipse 21.png",
    name: "pablo josh",
    message: "started following you",
    follow: "follow back",
  },
  {
    img: "/Ellipse 21.png",
    name: "kemi adesewa",
    message: "started following you",
    follow: "follow back",
  },
  {
    img: "/Ellipse 21.png",
    name: "bolaji james",
    message: "liked your post",
    follow: "",
  },
  {
    img: "/Ellipse 21.png",
    name: "kemi adetiba",
    message: "commented on your post",
    follow: "",
  },
  {
    img: "/Ellipse 21.png",
    name: "florence esther",
    message: "started following you",
    follow: "follow back",
  },
  {
    img: "/Ellipse 21.png",
    name: "james samson",
    message: "started following you",
    follow: "follow back",
  },
  {
    img: "/Ellipse 21.png",
    name: "james john",
    message: "started following you",
    follow: "follow back",
  },
  {
    img: "/Ellipse 21.png",
    name: "onu blessing",
    message: "started following you",
    follow: "follow back",
  },
];
export const chatArray = [
  {
    img: "/Ellipse 21.png",
    name: "folade josh",
    message: "where are you?",
    time: "11:42am",
    seen: "true",
  },
  {
    img: "/Ellipse 21.png",
    name: "george george",
    message: "alright",
    time: "9:40am",
    seen: "",
  },
  {
    img: "/Ellipse 21.png",
    name: "joke veronica",
    message: "hello sir",
    time: "8:12am",
    seen: "",
  },
  {
    img: "/Ellipse 21.png",
    name: "bummi grace",
    message: "good morning",
    time: "11:30am",
    seen: "true",
  },
  {
    img: "/Ellipse 21.png",
    name: "name",
    message: "thanks sir",
    time: "12:11am",
    seen: "true",
  },
  {
    img: "/Ellipse 21.png",
    name: "adetunji oluwadailola",
    message: "seen the money bro",
    time: "7:20am",
    seen: "",
  },
  {
    img: "/Ellipse 21.png",
    name: "michael jackson",
    message: "i've heard you",
    time: "8:08am",
    seen: "true",
  },
];

const Notification = () => {
  return (
    <article className={styles.notification}>
      <div className={styles.top}>
        <p>
          <FaBell className={styles.bell} />
          Notifications
        </p>
        <p>See All</p>
      </div>
      <div className={styles.container}>
        {notificationArray.map(({ img, follow, name, message }, index) => {
          return (
            <div className={styles.box} key={index}>
              <div className={styles.part}>
                <img src={img} alt={name} />
                <div>
                  <p className={styles.name}>
                    {name.length > 14 ? `${name.substr(0, 14)}...` : name}
                  </p>
                  <p className={styles.message}>
                    {message.length > 20
                      ? `${message.substr(0, 20)}...`
                      : message}
                  </p>
                </div>
              </div>
              {follow && <button>{follow}</button>}
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default Notification;
