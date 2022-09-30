import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import styles from "../../../../styles/newsFeed/post.module.css";
import { comments } from "../../database";

const Comment = () => {
  return (
    <section className={styles.comment}>
      <h3>Comments</h3>
      <div className={styles.commentBox}>
        {comments.map(({ time, img, name, comment, course }, index) => {
          return (
            <article key={index}>
              <img src={img} alt={name} />
              <div className={styles.commentinfo}>
                <div className={styles.user}>
                  <h4 className={styles.name}>{name}</h4>
                  <p className={styles.time}>{time}</p>
                </div>
                <p className={styles.course}>
                  <FaGraduationCap
                    style={{ color: "#4063d6", marginRight: "5px" }}
                  />
                  {course}
                </p>
                <p className={styles.commentcont}>{comment}</p>
                <p className={styles.like}>
                  <AiFillLike style={{ marginRight: "5px" }} />
                  Like
                </p>
              </div>
            </article>
          );
        })}
      </div>
      <form className={styles.givecom}>
        <h3>Give Comment</h3>
        {/* <textarea placeholder="Type Your Comment" /> */}
        <textarea
          placeholder="Type Your Comment"
          cols="30"
          rows="10"
        ></textarea>
        <button>Post Comment</button>
      </form>
    </section>
  );
};

export default Comment;
