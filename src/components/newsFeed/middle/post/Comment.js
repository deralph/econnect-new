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
            <article
              key={index}
              className="flex items-start justify-between pt-8 px-0 p-4 border-b border-solid border-[rgba(0, 0, 0, 0.2)]"
            >
              <img src={img} alt={name} className="w-16 h-16" />
              <div className="w-[89%] text-[#1e1e1e]">
                <div className="flex justify-between">
                  <h4 className="text-secondary text-base capitalize">
                    {name}
                  </h4>
                  <p className="text-[0.9em]">{time}</p>
                </div>
                <p className="capitalize py-2 text-xs flex items-center">
                  <FaGraduationCap
                    style={{ color: "#4063d6", marginRight: "5px" }}
                  />
                  {course}
                </p>
                <p className="flex items-center text-sm w-[90%]  font-bold text-[rgba(0, 0, 0, 0.6)]">
                  {comment}
                </p>
                <p className="flex items-center text-[rgba(0, 0, 0, 0.6)] text-xs mt-4">
                  <AiFillLike style={{ marginRight: "5px" }} />
                  Like
                </p>
              </div>
            </article>
          );
        })}
      </div>
      <form className="mt-8">
        <h3 className="">Give Comment</h3>
        {/* <textarea placeholder="Type Your Comment" /> */}
        <textarea
          placeholder="Type Your Comment"
          cols="30"
          rows="10"
          className="h-[40%] w-full p-4 italic border border-solid border-[rgba(0, 0, 0, 0.2)]"
        ></textarea>
        <button className="bg-primary text-white p-6 mt-6 ">
          Post Comment
        </button>
      </form>
    </section>
  );
};

export default Comment;
