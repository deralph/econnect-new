import React from "react";
import styles from "../../../styles/newsFeed/chat.module.css";
import { FaBell } from "react-icons/fa";
import { notificationArray } from "../database";

const Notification = ({ real }) => {
  return (
    <article className="basis-[43%] bg-white rounded relative my=[5px] overflow-scroll  shadow-[10px_10px_10px_black-100)]">
      {real || (
        <div className=" top">
          <p className=" top-head">
            <FaBell className="text-red-500 text-base mr-[10px] rotate-[-24.16deg]" />
            Notifications
          </p>
          <p className="top-p">See All</p>
        </div>
      )}
      <div className="px-4">
        {notificationArray.map(
          ({ img, follow, name, message, time }, index) => {
            return (
              <div className="box" key={index}>
                <div className="flex">
                  <img
                    src={img}
                    alt={name}
                    className="h-12 w-12 mr-3 rounded-[50%]"
                  />
                  <div>
                    <p
                      className={
                        real
                          ? `font-medium  text-primary text-xl capitalize font-primary`
                          : `font-semibold  text-secondary text-xs capitalize text-left font-primary`
                      }
                    >
                      {real
                        ? `${name}`
                        : name.length > 14
                        ? `${name.substr(0, 14)}...`
                        : name}
                    </p>
                    <p
                      className={
                        real
                          ? `italic font-primary font-normal text-base text-[#323232]`
                          : `mt-1 italic text-[10px] text-left`
                      }
                    >
                      {real
                        ? `${message}`
                        : message.length > 20
                        ? `${message.substr(0, 20)}...`
                        : message}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between flex-col">
                  {real && (
                    <p className="font-primary font-medium text-xs text-right mb-4 text-#32323260">
                      {time}
                    </p>
                  )}
                  {follow && (
                    <button className="text-[0.6em] bg-primary text-white p-[5px] rounded">
                      {follow}
                    </button>
                  )}
                </div>
              </div>
            );
          }
        )}
      </div>
    </article>
  );
};

export default Notification;
