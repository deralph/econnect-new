import React from "react";
import styles from "../../../styles/newsFeed/chat.module.css";
import { FaBell } from "react-icons/fa";
import { notificationArray } from "../database";

const Notification = ({ real }) => {
  return (
    <article className={styles.notification}>
      {real || (
        <div className={styles.top}>
          <p>
            <FaBell
              className={styles.bell}
              style={{ color: "red", rotate: "-24.16deg", marginRight: "10px" }}
            />
            Notifications
          </p>
          <p>See All</p>
        </div>
      )}
      <div className={styles.container}>
        {notificationArray.map(
          ({ img, follow, name, message, time }, index) => {
            return (
              <div className={styles.box} key={index}>
                <div className={styles.part}>
                  <img src={img} alt={name} />
                  <div>
                    <p className={real ? `${styles.name1}` : `${styles.name}`}>
                      {real
                        ? `${name}`
                        : name.length > 14
                        ? `${name.substr(0, 14)}...`
                        : name}
                    </p>
                    <p
                      className={
                        real ? `${styles.message1}` : `${styles.message}`
                      }
                    >
                      {real
                        ? `${message}`
                        : message.length > 20
                        ? `${message.substr(0, 20)}...`
                        : message}
                    </p>
                  </div>
                </div>
                <div className={styles.time}>
                  {real && <p>{time}</p>}
                  {follow && <button>{follow}</button>}
                </div>
              </div>
            );
          }
        )}
      </div>
    </article>
  );
};

export default Notification;
