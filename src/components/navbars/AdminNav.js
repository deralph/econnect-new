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
    // <section className={styles.adminNav}>
    <section className="w-1/4 bg-secondary rounded-xl shadow-[0px_4.15135px_20.7568px_rgba(0, 0, 0, 0.13)] h-screen grid grid-cols-2 gap-init p-init">
      <Link to="/admin" className="admin-link ">
        <FaUserEdit className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">Admins</p>
      </Link>
      <Link className="admin-link " to="/users">
        <FaUserFriends className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em]  ">Users</p>
      </Link>
      <Link className="admin-link " to="/verified-user">
        <MdVerifiedUser className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">Verified Users</p>
      </Link>
      <Link className="admin-link " to="/admin-business">
        <FaToolbox className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">Business</p>
      </Link>
      <Link className="admin-link " to="/post-news">
        <GiNotebook className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">
          Post News / Broadcast
        </p>
      </Link>
      <Link className="admin-link " to="/upload-tp">
        <GiNotebook className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">Upload TP List</p>
      </Link>
      <Link className="admin-link " to="/upload-nysc">
        <FaUserGraduate className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">
          Upload NYSC Senate List
        </p>
      </Link>
      <Link className="admin-link " to="">
        <MdEmail className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">
          Send E-mail Message
        </p>
      </Link>
      <Link className="admin-link " to="/admin-faq">
        <FaQuestionCircle className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">FAQs</p>
      </Link>
      <Link className="admin-link " to="">
        <FaPoll className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">Polls</p>
      </Link>
      <Link className="admin-link " to="">
        <BiStats className="text-3xl" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">Usage Statistics</p>
      </Link>
      <Link className="admin-link " to="/admin-login">
        <FaPowerOff className="text-3xl bg-red-800 rounded-[50%] p-1 text-secondary" />
        <p className="font-primary w-4/5 mt-2 text-[.8em] ">Log Out</p>
      </Link>
    </section>
  );
};

export default AdminNav;
