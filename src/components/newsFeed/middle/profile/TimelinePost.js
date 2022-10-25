import React from "react";
import { BsClock } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
import { TimelinePosts } from "../../database";
import styles from "../../../../styles/newsFeed/profile.module.css";

const TimelinePost = () => {
  return (
    <>
      {TimelinePosts.map(
        (
          { name, image, course, time, description, likes, comments },
          index
        ) => {
          return (
            <div className={styles.post} key={index}>
              <div className={styles.user}>
                <img src={image} alt={name} />
                <div className="">
                  <p>{name}</p>
                  <p>{course}</p>
                  <p style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <BsClock style={{ marginRight: "1em" }} />
                    {time}
                  </p>
                </div>
              </div>
              <p className={styles.postDescription}>{description}</p>
              <div className="">
                <p>
                  <AiFillLike
                    style={{ color: "#4063D6", marginRight: ".4em" }}
                  />{" "}
                  50
                </p>
                <p>
                  <GoCommentDiscussion
                    style={{ color: "##07174B", marginRight: ".4em" }}
                  />{" "}
                  50
                </p>
              </div>
              <div className="">
                <p>
                  <AiFillLike style={{ marginRight: ".4em" }} /> Like
                </p>
                <p>
                  <BiCommentDetail style={{ marginRight: ".4em" }} /> Comment
                </p>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default TimelinePost;
