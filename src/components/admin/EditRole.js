import React from "react";
import { AiFillCheckSquare } from "react-icons/ai";
import { BiStats } from "react-icons/bi";
import { FaTimesCircle, FaUserEdit } from "react-icons/fa";
import { MdDelete, MdVerifiedUser } from "react-icons/md";
import styles from "../../styles/admin/edit.module.css";
import style from "../../styles/navbar.module.css";
import BackArrow from "../newsFeed/BackArrow";

const EditRole = ({ profile }) => {
  return (
    <section className={styles.edit}>
      <BackArrow heading={profile ? "Adetunji Oluwadamilola" : "Admins"} />
      <article className={styles["edit-cont"]}>
        <img
          // style={{ borderRadius: "50%" }}
          className={styles["edit-img"]}
          src="/profilePics.png"
          alt="username"
        />
        <div className={styles.info}>
          {!profile && <p>Select Role</p>}
          <h2 className={styles.head}>Adetunji Oluwadamilola</h2>
          <p>Education, Computer Education</p>
          {profile ? (
            <article className={styles.userStat}>
              <div>
                {" "}
                <FaUserEdit className={styles.icon1} />
                <p>Admins</p>
              </div>
              <div>
                {" "}
                <MdVerifiedUser className={styles.icon1} />
                <p>Verified Users</p>
              </div>
              <div>
                <BiStats className={styles.icon1} />
                <p>Usage Statistics</p>
              </div>
            </article>
          ) : (
            <ul className={styles.option}>
              <li>
                <AiFillCheckSquare className={styles.check} /> Master Admin
              </li>
              <li>
                <AiFillCheckSquare className={styles.check} />
                Teaching Practice Poster
              </li>
              <li>
                <AiFillCheckSquare className={styles.check} />
                NYSC List Poster
              </li>
              <li>
                <AiFillCheckSquare className={styles.check} />
                News Feed Poster
              </li>
            </ul>
          )}
          {!profile && <button>Save Changes</button>}
        </div>
        {!profile ? (
          <button className={styles.del}>
            <MdDelete style={{ fontSize: "1.5em" }} /> Delete Admin
          </button>
        ) : (
          <button className={styles.del}>
            <FaTimesCircle style={{ fontSize: "1.5em", marginRight: ".5em" }} />{" "}
            Disable Account
          </button>
        )}
      </article>
    </section>
  );
};

export default EditRole;
