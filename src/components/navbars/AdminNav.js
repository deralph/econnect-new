import React from "react";
import styles from "../../styles/navbar.module.css";
import {
  FaPoll,
  FaPowerOff,
  FaQuestionCircle,
  FaToolbox,
  FaUserEdit,
  FaUserFriends,
  FaUserGraduate,
} from "react-icons/fa";
import { MdEmail, MdVerifiedUser } from "react-icons/md";
import { BiStats } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";

const AdminNav = () => {
  return (
    <section className={styles.adminNav}>
      <div>
        <FaUserEdit className={styles.icon1} />
        <p>Admins</p>
      </div>
      <div>
        <FaUserFriends className={styles.icon1} />
        <p>Users</p>
      </div>
      <div>
        <MdVerifiedUser className={styles.icon1} />
        <p>Verified Users</p>
      </div>
      <div>
        <FaToolbox className={styles.icon1} />
        <p>Business</p>
      </div>
      <div>
        <GiNotebook className={styles.icon1} />
        <p>Post News / Broadcast</p>
      </div>
      <div>
        <GiNotebook className={styles.icon1} />
        <p>Upload TP List</p>
      </div>
      <div>
        <FaUserGraduate className={styles.icon1} />
        <p>Upload NYSC Senate List</p>
      </div>
      <div>
        <MdEmail className={styles.icon1} />
        <p>Send E-mail Message</p>
      </div>
      <div>
        <FaQuestionCircle className={styles.icon1} />
        <p>FAQs</p>
      </div>
      <div>
        <FaPoll className={styles.icon1} />
        <p>Polls</p>
      </div>
      <div>
        <BiStats className={styles.icon1} />
        <p>Usage Statistics</p>
      </div>
      <div>
        <FaPowerOff className={`${styles.icon1} ${styles.logout}`} />
        <p>Log Out</p>
      </div>
    </section>
  );
};

export default AdminNav;
