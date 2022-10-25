import React from "react";
import styles from "../../../../styles/newsFeed/friends.module.css";
import { friends } from "../../database";

const FiendsCont = ({ addFriends, admin, user, verify }) => {
  const check = user && admin;
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
              admin || verify
                ? `${styles.friend} ${styles.friendAdd}`
                : `${styles.friend}`
            }
            key={index}
          >
            {verify && <button className={styles.verify}>Unerify</button>}{" "}
            <div className="">
              <img src={img} alt={name} />
              {active && <p style={{ background: "#039b2d" }}></p>}
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.course}>{course}</p>
            {check ? "" : admin && <p className={styles.role}>Master Admin</p>}
            {(!user || !verify) && (
              <button
                style={{
                  background: `${addFriends || admin ? `#4063D6` : "auto"}`,
                }}
              >
                {addFriends ? "Follow" : admin ? "Edi Role" : "Chat"}
              </button>
            )}
          </div>
        );
      })}
    </article>
  );
};

export default FiendsCont;
