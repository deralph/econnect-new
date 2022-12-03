import React from "react";
import styles from "../../../../styles/newsFeed/friends.module.css";
import { friends } from "../../database";

const FiendsCont = ({ addFriends, admin, user, verify }) => {
  const check = user && admin;
  return (
    <article
      className={`overflow-scroll h-[calc(100vh-100px)] flex justify-between flex-wrap pb-8 my-0 mx-auto relative w-[97%]  ${
        admin && ` justify-evenly`
      }`}
    >
      {friends.map(({ img, name, course, active }, index) => {
        // cousre in the above becomes post when dealing withadmin
        return (
          <div
            className={`bg-white flex items-center justify-center flex-col basis-[32%] h-auto relative mt-4 mb-0 mx-0 p-6 rounded-2xl shadow-[0_8.5_27.6_black-100]  ${
              admin || verify ? ` basis-[23%] h-auto` : ``
            }`}
            key={index}
          >
            {verify && (
              <button className="font-medium text-[8.6px] bg-primary rounded absolute top-3 right-3 p-2 ">
                Unerify
              </button>
            )}{" "}
            <div className="w-24 relative rounded-[50%]">
              <img src={img} alt={name} className="w-full" />
              {active && (
                <p className="w-4 h-4 z-10 absolute right-0 bottom-4 rounded-[50%] bg-[#039b2d]"></p>
              )}
            </div>
            <p className="font-primary font-semibold text-[10px] text-center text-primary ">
              {name}
            </p>
            <p className="font-medium text-[10px] text-center py-3 text-[rgba(0, 0, 0, 0.7)]">
              {course}
            </p>
            {check ? "" : admin && <p className={styles.role}>Master Admin</p>}
            {!user && (!(user && admin) || !verify) && (
              <button
                style={{
                  background: `${addFriends || admin ? `#4063D6` : "auto"}`,
                }}
                className="rounded font-medium text-xs text-center text-white py-2 px-8 bg-[#039b2d]"
              >
                {addFriends ? "Follow" : admin ? "Edit Role" : "Chat"}
              </button>
            )}
          </div>
        );
      })}
    </article>
  );
};

export default FiendsCont;
