import React from "react";
import styles from "../../../styles/newsFeed/chat.module.css";
import { friends } from "../database";
import { FaGraduationCap, FaUserFriends } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

const Friends = () => {
  return (
    <section className="basis-[43%] bg-white rounded relative my=[5px] overflow-scroll  shadow-[10px_10px_10px_black-100)]">
      <div className={styles.container}>
        <div className="top">
          <p className="top-head">
            <FaUserFriends className="mr-2 text-2xl" />
            Friends
          </p>
          <p className="top-p">See All</p>
        </div>

        {friends.map(({ img, name, username, course }, index) => {
          return (
            <div className="box" key={index}>
              <div className="flex ">
                <img src={img} alt={name} className="h-10" />
                <div className="ml-4">
                  <p className=" font-primary font-medium text-xs text-secondary">
                    {" "}
                    {name}
                  </p>
                  <p className="course-tiny ">
                    <FaGraduationCap className="text-primary mr-[6px]" />
                    {course}
                  </p>
                  <p className="course-tiny">
                    <FiUser className="text-[#E59112] mr-[6px]" />
                    {username}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Friends;
