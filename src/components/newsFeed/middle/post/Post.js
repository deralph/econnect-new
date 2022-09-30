import React from "react";
import styles from "../../../../styles/newsFeed/post.module.css";
import style from "../../../../styles/newsFeed/feed.module.css";
import { AiFillLike } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import Comment from "./Comment";
const Post = () => {
  return (
    <section className={styles.postContent}>
      <h2>
        Admission into the Pre-Degree Programmes for the 2022/2023 Academic
        Session{" "}
      </h2>
      <img src="rectangle 136.png" alt="post pics" />
      <div className={styles.postDetails}>
        <p className={style.date}>
          <BsClock style={{ marginRight: "5px" }} />1 day ago
        </p>
        <div className={style.likes}>
          <p>
            <AiFillLike style={{ color: "#4063D6", marginRight: "5px" }} />
            50
          </p>
          <p>
            <GoCommentDiscussion
              style={{ color: "#07174B", marginRight: "5px" }}
            />
            50
          </p>
        </div>
      </div>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut in
        molestie neque libero turpis. Faucibus ultrices quisque quis a sit in
        arcu. Odio gravida consectetur eget nullam proin metus, penatibus massa
        id. Habitasse aliquam quisque nibh in. Aliquam velit augue vestibulum
        mattis eu gravida leo pharetra eget. Quam amet, orci vitae sagittis
        integer eget mattis neque, lacinia. Donec eget in cras pellentesque urna
        arcu, pellentesque semper varius. Cursus in nunc dignissim malesuada
        eros, in felis massa ante. Sed platea elit mauris sed et risus amet.
        Risus, arcu, tellus varius accumsan tincidunt laoreet eget ultrices
        amet. Porttitor aliquam tellus eget purus est accumsan nunc, hac. Lacus
        cras.
      </p>
      <div className={style.comment}>
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
      <Comment />
    </section>
  );
};

export default Post;
