import React from "react";
import styles from "../../../../styles/newsFeed/friends.module.css";
import { friends } from "../../database";

const FiendsCont = ({ addFriends, admin }) => {
  return (
    <article
      className={
        admin
          ? `${styles.container} ${styles.containerAdd}`
          : `${styles.container}`
      }
    >
      {friends.map(({ img, name, course, active }, index) => {
        // cousre in the above becomes post when dealing withadmin
        return (
          <div
            className={
              admin
                ? `${styles.friend} ${styles.friendAdd}`
                : `${styles.friend}`
            }
            key={index}
          >
            <div className="">
              <img src={img} alt={name} />
              {active && <p style={{ background: "#039b2d" }}></p>}
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.course}>{course}</p>
            <p className={styles.role}>Master Admin</p>
            <button
              style={{
                background: `${addFriends || admin ? `#4063D6` : "auto"}`,
              }}
            >
              {addFriends ? "Follow" : admin ? "Edi Role" : "Chat"}
            </button>
          </div>
        );
      })}
    </article>
  );
};

export default FiendsCont;
