import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/profile.module.css";
import BackArrow from "../../BackArrow";
import { IoIosArrowDown, IoMdMail } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import style1 from "../../../../styles/chat/chat.module.css";
import TimelinePost from "./TimelinePost";

const Profile = ({ pro, friendsProfile, chat }) => {
  const option = [
    // {
    //   main: friendsProfile ? "" : "Logout",
    //   color: friendsProfile ? "" : "#039B2D",
    // },
    { main: friendsProfile ? "Message" : "Edit Profile", color: "#4063D6" },
  ];

  return (
    <section className={chat ? `${style1.chatSection}` : `${style.center}`}>
      {!friendsProfile ||
        (!chat && <BackArrow heading={"Profile"} option={option} />)}
      {pro && <BackArrow heading={"Profile"} option={option} />}
      <section
        className={
          friendsProfile
            ? `${styles.profile} ${styles.extra}`
            : `${styles.profile}`
        }
      >
        {friendsProfile || (chat && <BackArrow />)}
        <article
          className={
            chat
              ? `${styles.mainInfo} ${styles.mainInfo1}`
              : `${styles.mainInfo}`
          }
        >
          <img src="/profilePics.png" alt="profile pics" />
          <div className={styles.userInfo}>
            <h1>Oluwadamilola Samuel</h1>
            <p>
              <FaGraduationCap
                style={{ color: "#4063D6", marginRight: "6px" }}
              />
              Science, Computer Science
            </p>
            <p>
              <FiUser style={{ color: "#E59112", marginRight: "6px" }} />
              Dameaze
            </p>
            <p>
              <IoMdMail style={{ color: "#4063D6", marginRight: "6px" }} />{" "}
              vandisleo6@gmail.com
            </p>
            <div className={styles.follow}>
              <p>
                Followers<span>81</span>
              </p>
              <p>
                Following<span>30</span>
              </p>
              <p>
                Posts
                <span>10</span>
              </p>
            </div>
            {friendsProfile ||
              (chat && (
                <div
                  className={
                    chat ? `${styles.btns} ${styles.btns1}` : `${styles.btns}`
                  }
                >
                  {!chat && <button>Message</button>}
                  <button>
                    Following <IoIosArrowDown />
                  </button>
                </div>
              ))}
          </div>
        </article>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec,{" "}
        </p>
        <article className={styles.timeline}>
          <p className={styles.head}>Timeline</p>
          <TimelinePost />{" "}
        </article>
      </section>
    </section>
  );
};

export default Profile;
