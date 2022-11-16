import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import styles from "../../../../styles/newsFeed/feed.module.css";
import { newsFeed } from "../../database";
import { Link } from "react-router-dom";

const Feed = () => {
  return (
    <section
      classname={styles.feed}
      style={{ background: "#fff", marginTop: "10px", overflow: "hidden" }}
    >
      <div className={styles.top1}>
        <p>Latest Updates</p>
        <p>Trending</p>
      </div>
      <section className={styles.container}>
        {newsFeed.map(
          (
            { src, save, heading, date, description, totalLike, totalComment },
            index
          ) => {
            return (
              <Link to="/post/2" className={styles.posts} key={index}>
                <img src={src} alt="" />
                <div className={styles.postContent}>
                  <p className={styles.save}>{save && "save"}</p>
                  <h4 className={styles.postHead}>{heading}</h4>
                  <p className={styles.date}>
                    <BsClock style={{ marginRight: "5px" }} />
                    {date}
                  </p>
                  <p className={styles.description}>{description}</p>
                  <div className={styles.likes}>
                    <p>
                      <AiFillLike
                        style={{ color: "#4063D6", marginRight: "5px" }}
                      />
                      {totalLike}
                    </p>
                    <p>
                      <GoCommentDiscussion
                        style={{ color: "#07174B", marginRight: "5px" }}
                      />
                      {totalComment}
                    </p>
                  </div>
                  <div className={styles.comment}>
                    <p>
                      {" "}
                      <AiFillLike style={{ marginRight: "5px" }} />
                      like
                    </p>
                    <p>
                      <BiCommentDetail style={{ marginRight: "5px" }} />
                      comment
                    </p>
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </section>
    </section>
  );
};

export default Feed;
