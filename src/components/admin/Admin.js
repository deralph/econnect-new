import React from "react";
import AdminNav from "../navbars/AdminNav";
import AppNav from "../navbars/AppNav";
import styles from "../../styles/chat/chat.module.css";
import FiendsCont from "../newsFeed/middle/friends/FiendsCont";
import EditRole from "./EditRole";
import User from "./User";
import UserProfile from "./UserProfile";

const Admin = ({ edit, user, userProfile }) => {
  return (
    <section>
      <AppNav />
      <div className={styles.chat}>
        <AdminNav />
        {edit ? (
          <EditRole />
        ) : user ? (
          <User />
        ) : userProfile ? (
          <EditRole profile />
        ) : (
          <FiendsCont admin />
        )}
      </div>
    </section>
  );
};

export default Admin;
