import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/post.module.css";
import BackArrow from "../../BackArrow";
import Post from "./Post";
// import Post from "../middle/post/Post";

const PostCenter = () => {
  return (
    <section className="center">
      <BackArrow noArr />
      <Post />
    </section>
  );
};

export default PostCenter;
