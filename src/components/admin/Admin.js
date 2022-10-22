import React from "react";
import AdminNav from "../navbars/AdminNav";
import AppNav from "../navbars/AppNav";
import styles from "../../styles/chat/chat.module.css";
import FiendsCont from "../newsFeed/middle/friends/FiendsCont";

const Admin = () => {
  return (
    <section>
      <AppNav />
      <div className={styles.chat}>
        <AdminNav />
        <FiendsCont admin />
      </div>
    </section>
  );
};

export default Admin;
