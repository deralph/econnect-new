import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/profile.module.css";
import BackArrow from "../../BackArrow";
import { IoMdMail } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";
import { TimelinePosts } from "../../database";
import { BsClock } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";

const Profile = () => {
  const option = [
    { main: "Logout", color: "#039B2D" },
    { main: "Edit Profile", color: "#4063D6" },
  ];

  return (
    <section className={style.center}>
      <BackArrow heading={"Profile"} option={option} />
      <section className={styles.profile}>
        <article className={styles.mainInfo}>
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
          {TimelinePosts.map(
            ({ name, image, course, time, description, likes, comments }) => {
              return (
                <div className={styles.post}>
                  <div className={styles.user}>
                    <img src={image} alt={name} />
                    <div className="">
                      <p>{name}</p>
                      <p>{course}</p>
                      <p style={{ display: "flex", alignItems: "center" }}>
                        {" "}
                        <BsClock style={{ marginRight: "1em" }} />
                        {time}
                      </p>
                    </div>
                  </div>
                  <p className={styles.postDescription}>{description}</p>
                  <div className="">
                    <p>
                      <AiFillLike
                        style={{ color: "#4063D6", marginRight: ".4em" }}
                      />{" "}
                      50
                    </p>
                    <p>
                      <GoCommentDiscussion
                        style={{ color: "##07174B", marginRight: ".4em" }}
                      />{" "}
                      50
                    </p>
                  </div>
                  <div className="">
                    <p>
                      <AiFillLike style={{ marginRight: ".4em" }} /> Like
                    </p>
                    <p>
                      <BiCommentDetail style={{ marginRight: ".4em" }} />{" "}
                      Comment
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </article>
      </section>
    </section>
  );
};

export default Profile;
