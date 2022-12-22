import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import BackArrow from "../../BackArrow";
import Post from "./Post";
// import Post from "../middle/post/Post";

const PostCenter = () => {
  return (
    <section className="center h-[calc(100vh-10px)] overflow-scroll">
      <BackArrow />
      <Post />
    </section>
  );
};

export default PostCenter;
