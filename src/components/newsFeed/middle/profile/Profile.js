import React from "react";
import BackArrow from "../../BackArrow";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import TimelinePost from "./TimelinePost";

const Profile = ({ pro, friendsProfile, chat }) => {
  const option = [
    { main: friendsProfile ? "Message" : "Edit Profile", color: "#4063D6" },
  ];

  return (
    // <section className={chat ? `${style1.chatSection}` : `center`}>
    <section
      className={
        chat
          ? `h-[calc(100%-1.5em)] basis-2/5 mt-3 mb-2 ml-2 mr-[2px] bg-white rounded overflow-scroll shadow-[0px_l4px_21.px_rgba(0, 0, 0, 0.13)] lg:basis-3/5 md:basis-[80%] sml:basis-full`
          : `center`
      }
    >
      {!friendsProfile ||
        (!chat && <BackArrow heading={"Profile"} option={option} />)}
      {pro && <BackArrow heading={"Profile"} option={option} />}
      <section
        className={`  h-[calc(100vh-70px)] overflow-scroll bg-white relative p-4 ${
          friendsProfile && "mt-4"
        }`}
      >
        {friendsProfile || (chat && <BackArrow />)}
        <article
          className={` flex justify-evenly items-center ${chat && "p-4"}`}
        >
          <img
            src="/profilePics.png"
            alt="profile pics"
            className="w-2/5 rounded-[50%]"
          />
          <div className="">
            <h1 className="font-medium text-2xl text-primary">
              Oluwadamilola Samuel
            </h1>
            <p className="flex items-center font-medium text-lg text-[rgba(0,0,0,0.7)]">
              <FaGraduationCap
                style={{ color: "#4063D6", marginRight: "6px" }}
              />
              Science, Computer Science
            </p>
            <p className="flex items-center font-medium text-lg text-[rgba(0,0,0,0.7)]">
              <FiUser style={{ color: "#E59112", marginRight: "6px" }} />
              Dameaze
            </p>
            <p className="flex items-center font-medium text-lg text-[rgba(0,0,0,0.7)]">
              <IoMdMail style={{ color: "#4063D6", marginRight: "6px" }} />{" "}
              vandisleo6@gmail.com
            </p>
            <div className="mt-8 flex justify-between">
              <p className="text-primary font-semibold text-[0.8em] text-center  flex flex-col justify-center">
                Followers
                <span className=" font-semibold text-[2em]">81</span>
              </p>
              <p className="text-primary font-semibold text-[0.8em] text-center  flex flex-col justify-center">
                Following
                <span className=" font-semibold text-[2em]">30</span>
              </p>
              <p className="text-primary font-semibold text-[0.8em] text-center   flex flex-col justify-center">
                Posts
                <span className=" font-semibold text-[2em]">10</span>
              </p>
            </div>
            {friendsProfile ||
              (chat && (
                <div
                  className={`flex justify-between w-4/5 mt-4 ml-1/5 ${
                    chat && "justify-end"
                  }`}
                >
                  {!chat && (
                    <button
                      className={`font-primary text-white py-2 px-6 bg-[#039b2d] rounded font-medium text-[0.74] ${
                        chat && "bg-primary rounded font-semibold text-xs"
                      } `}
                    >
                      Message
                    </button>
                  )}
                  <button className="font-primary text-white py-2 px-6  bg-primary rounded font-semibold text-xs">
                    Following <IoIosArrowDown />
                  </button>
                </div>
              ))}
          </div>
        </article>
        <p className="rounded font-normal text-base text-justifytext-black pt-8 px-6 pb-4 w-[]95% my-4 mx-auto bg-[rgba(217,217,217,0.25)] bg-">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec,{" "}
        </p>
        <article className="w-[95%] my-4 mx-auto">
          <p className="font-normal text-base text-justify p-2 text-primary border-b-[0.5px] border-solid border-[rgba(0,0,0,0.6)]">
            Timeline
          </p>
          <TimelinePost />{" "}
        </article>
      </section>
    </section>
  );
};

export default Profile;
