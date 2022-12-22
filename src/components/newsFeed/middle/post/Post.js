import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BsClock } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import Comment from "./Comment";
const Post = () => {
  return (
    // <section className={styles.postContent}>
    <section className="bg-white p-6 h-full overflow-scroll">
      <h2 className="text-secondary text-lg py-5 font-primary">
        Admission into the Pre-Degree Programmes for the 2022/2023 Academic
        Session{" "}
      </h2>
      <img
        src="/largePostPics.png"
        alt="post pics"
        className="max-h-[60vh] w-full"
      />
      <div className="flex justify-between">
        <p className="text-[0.7em] text-left my-1 flex items-center text-[(rgba(0,0,0,0.5))]">
          <BsClock className="mr-1" />1 day ago
        </p>
        <div className="flex items-center text-xs my-2 text-[rgba(50, 50, 50, 0.78)]">
          <p className="flex items-center ml-4">
            <AiFillLike className="mr-1 text-primary" />
            50
          </p>
          <p className="flex items-center ml-4">
            <GoCommentDiscussion className="mr-1 text-secondary" />
            50
          </p>
        </div>
      </div>
      <p className="text-[#000000e5] text-base py-4">
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
      <div className="py-2 morder-t border-solid border-[rgba(50, 50, 50, 0.48)] flex text-xs text-[rgba(0, 0, 0, 0.45)]">
        <p>
          {" "}
          <AiFillLike className="mr-1" />
          like
        </p>
        <p>
          <BiCommentDetail className="mr-1" />
          comment
        </p>
      </div>
      <Comment />
    </section>
  );
};

export default Post;
