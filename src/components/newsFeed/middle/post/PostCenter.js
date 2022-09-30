import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/post.module.css";
import Post from "./Post";
// import Post from "../middle/post/Post";

const PostCenter = () => {
  return (
    <section className={style.center}>
      <FaArrowLeft className={styles.arrow} />
      <Post />
    </section>
  );
};

export default PostCenter;
