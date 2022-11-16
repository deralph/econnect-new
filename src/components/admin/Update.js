import React from "react";
import styles from "../../styles/admin/update.module.css";
import { AiFillLike } from "react-icons/ai";
import { FaClock } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import BackArrow from "../newsFeed/BackArrow";
import { newsFeed } from "../newsFeed/database";
import TimelinePost from "../newsFeed/middle/profile/TimelinePost";

const Update = () => {
  const option = [
    {
      main: "Post Update",
      color: "#4063D6",
    },
  ];
  return (
    <section className="edit">
      <BackArrow option={option} heading={"Updates"} noArr />
      {/* <TimelinePost /> */}
      <article className={styles.update}>
        {newsFeed.map(
          ({ src, heading, description, date, totalComment, totalLike }) => {
            return (
              <atricle className={styles.updateCont}>
                <img src={src} alt={heading} />
                <div className={styles.updateLead}>
                  <div className={styles.updateInfo}>
                    <p>{heading}</p>
                    <p>
                      <FaClock style={{ marginRight: ".4em" }} />
                      {date}
                    </p>
                    <p>
                      {description}
                      {description}
                      {description}
                      {description}
                      {description}
                      {description}
                    </p>
                  </div>
                  <div className={styles.lineDiv}>
                    <p>
                      <AiFillLike />
                      {totalLike}
                    </p>
                    <p>
                      <GoCommentDiscussion />
                      {totalComment}
                    </p>
                  </div>
                </div>
              </atricle>
            );
          }
        )}
      </article>
    </section>
  );
};

export default Update;
