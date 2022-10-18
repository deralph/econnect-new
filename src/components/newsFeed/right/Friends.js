import React from "react";
import styles from "../../../styles/newsFeed/chat.module.css";
import { friends } from "../database";
import { FaGraduationCap, FaUserFriends } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Friends = () => {
  return (
    <section className={styles.notification}>
      <div className={styles.container}>
        <div className={styles.top}>
          <p>
            <FaUserFriends style={{ marginRight: ".5em", fontSize: "1.5em" }} />
            Friends
          </p>
          <p>See All</p>
        </div>

        {friends.map(({ img, name, username, course }, index) => {
          return (
            <div className={styles.box} key={index}>
              <div className={styles.part}>
                <img src={img} alt={name} style={{ height: "2.5em" }} />
                <div>
                  <p className={styles.name2}> {name}</p>
                  <p className={styles.course}>
                    <FaGraduationCap
                      style={{ color: "#4063D6", marginRight: "6px" }}
                    />
                    {course}
                  </p>
                  <p className={styles.username}>
                    <FiUser style={{ color: "#E59112", marginRight: "6px" }} />
                    {username}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Friends;
