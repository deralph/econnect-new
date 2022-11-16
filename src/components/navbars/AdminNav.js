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
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <section className={styles.adminNav}>
      <Link to="/admin">
        <FaUserEdit className={styles.icon1} />
        <p>Admins</p>
      </Link>
      <Link to="/users">
        <FaUserFriends className={styles.icon1} />
        <p>Users</p>
      </Link>
      <Link to="/verified-user">
        <MdVerifiedUser className={styles.icon1} />
        <p>Verified Users</p>
      </Link>
      <Link to="/admin-business">
        <FaToolbox className={styles.icon1} />
        <p>Business</p>
      </Link>
      <Link to="/post-news">
        <GiNotebook className={styles.icon1} />
        <p>Post News / Broadcast</p>
      </Link>
      <Link to="/upload-tp">
        <GiNotebook className={styles.icon1} />
        <p>Upload TP List</p>
      </Link>
      <Link to="/upload-nysc">
        <FaUserGraduate className={styles.icon1} />
        <p>Upload NYSC Senate List</p>
      </Link>
      <Link to="">
        <MdEmail className={styles.icon1} />
        <p>Send E-mail Message</p>
      </Link>
      <Link to="/admin-faq">
        <FaQuestionCircle className={styles.icon1} />
        <p>FAQs</p>
      </Link>
      <Link to="">
        <FaPoll className={styles.icon1} />
        <p>Polls</p>
      </Link>
      <Link to="">
        <BiStats className={styles.icon1} />
        <p>Usage Statistics</p>
      </Link>
      <Link to="/admin-login">
        <FaPowerOff className={`${styles.icon1} ${styles.logout}`} />
        <p>Log Out</p>
      </Link>
    </section>
  );
};

export default AdminNav;
