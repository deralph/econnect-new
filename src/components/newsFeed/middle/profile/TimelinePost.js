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
            // post
            <div
              className="bg-white rounded-[2]px  mt-4 p-5 shadow-[0_4_23_rgba(0,0,0,0.1)]"
              key={index}
            >
              <div className="flex items-center">
                <img
                  src={image}
                  alt={name}
                  className="w-16 rounded-[50%] mr-4"
                />
                <div className="">
                  <p className="font-medium text-xl text-primary">{name}</p>
                  <p className="italic font-normal text-[0.83em] text-[rgba(0,0,0,0.45)]">
                    {course}
                  </p>
                  <p className="flex items-center font-medium text-[0.67em] text-[rgba(0,0,0,0.5)]">
                    {" "}
                    <BsClock className="mr-4" />
                    {time}
                  </p>
                </div>
              </div>
              <p className="font-normal text-[0.8em] mt-8 text-[#323232]">
                {description}
              </p>
              <div className=" flex mt-4 justify-end pb-4 border-b-[0.65px] border-solid border-[50,50,50,0.48]">
                <p className="ml-4 font-medium text-xs flex items-center text-[rgba(50,50,50,0.78)]">
                  <AiFillLike className="text-primary mr-2" /> 50
                </p>
                <p className="ml-4 font-medium text-xs flex items-center text-[rgba(50,50,50,0.78)]">
                  <GoCommentDiscussion className="text-secondary mr-2" /> 50
                </p>
              </div>
              <div className="flex justify-evenly items-center pt-4">
                <p className="text-[rgba(50,50,50,0.78)] flex items-center">
                  <AiFillLike className="mr-2" /> Like
                </p>
                <p className="text-[rgba{50,50,50,0.78}] flex items-center">
                  <BiCommentDetail className="mr-2" /> Comment
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
