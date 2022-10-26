import React from "react";
import AdminNav from "../navbars/AdminNav";
import AppNav from "../navbars/AppNav";
import styles from "../../styles/chat/chat.module.css";
import FiendsCont from "../newsFeed/middle/friends/FiendsCont";
import EditRole from "./EditRole";
import User from "./User";
import Verify from "./Verify";
import PostNews from "./PostNews";
import Update from "./Update";
import Tp from "./Tp";
import Business from "./business/Business";

const Admin = ({
  edit,
  business,
  nysc,
  tp,
  update,
  user,
  news,
  userProfile,
  verify,
}) => {
  return (
    <section>
      <AppNav />
      <main className={styles.chat}>
        <AdminNav />
        {edit ? (
          <EditRole />
        ) : user ? (
          <User />
        ) : userProfile ? (
          <EditRole profile />
        ) : verify ? (
          <Verify />
        ) : news ? (
          <PostNews />
        ) : update ? (
          <Update />
        ) : tp ? (
          <Tp />
        ) : nysc ? (
          <Tp nysc />
        ) : business ? (
          <Business adminDisable />
        ) : (
          <FiendsCont admin />
        )}
      </main>
    </section>
  );
};

export default Admin;
