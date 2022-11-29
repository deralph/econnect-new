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
      // classname={styles.feed}
      classname="overflow-hidden relative bg-white mt-[10px]  "
      // style={{ background: "#fff", marginTop: "10px", overflow: "hidden" }}
    >
      {/* <div className={styles.top1}> */}
      <div className="flex justify-around p-[10px] bg-white z-50 mt-4 shadow-lg">
        <p className="relative bg-white w-full text-center font-bold px-[10px] pt[10px] pb-[15px] text-primary border-r border-solid border-[#32323240] after:feed-after after:content-['']">
          Latest Updates
        </p>
        <p className="bg-white w-full text-center font-bold px-[10px] pt[10px] pb-[15px] text-[#32323273]">
          Trending
        </p>
      </div>
      <section className="overflow-scroll h-[calc(100vh-280px)] bg-white z-1">
        {newsFeed.map(
          (
            { src, save, heading, date, description, totalLike, totalComment },
            index
          ) => {
            return (
              // <Link to="/post/2" className={styles.posts} key={index}>
              <Link
                to="/post/2"
                className="flex items-start m-4 p-[0.8em] relative z-1 shadow-[0px_4px_25px_0px_#0000001a] "
                key={index}
              >
                <img
                  src={src}
                  alt=""
                  className="h-[115px] w-[115px] rounded mr-[20px]"
                />
                <div className="w-[70%]">
                  <p className="absolute rounded p-[5px] top-[10px] right-[10px] text-[0.6em] text-white font-medium bg-[#32323259]">
                    {save && "save"}
                  </p>
                  <h4 className="w-[90%] text-[0.9em] text-secondary">
                    {heading}
                  </h4>
                  <p className="text-[0.7em] text-left my-[5px] flex items-center text-[#00000080]">
                    <BsClock className="mr-[5px]" />
                    {date}
                  </p>
                  <p className="text-left text-[#323232] text-base">
                    {description}
                  </p>
                  <div className="flex items-center text-[.8em] my-[7px] text-[#323232C7]">
                    <p className="flex items-center mr-4">
                      <AiFillLike className="mr-[20px] text-primary mr-[5px]" />
                      {totalLike}
                    </p>
                    <p className="flex  items-center mr-4">
                      <GoCommentDiscussion className="text-secondary mr-[5px]" />
                      {totalComment}
                    </p>
                  </div>
                  <div className="py-[7px] border-t border-solid border-[#3232327A] flex text-[.8em] text-[#00000073]">
                    <p className="flex items-center mr-4">
                      {" "}
                      <AiFillLike className="mr-[5px]" />
                      like
                    </p>
                    <p className="flex items-center mr-4">
                      <BiCommentDetail className="mr-[5px]" />
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
