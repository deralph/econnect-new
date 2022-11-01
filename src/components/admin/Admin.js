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
import BusinessDeatails from "./business/BusinessDetails";
import SubPackage from "./business/SubPackage";
import Businesses from "./business/Businesses";
import Faq from "./faq/Faq";

const Admin = ({
  edit,
  disable,
  approve,
  nysc,
  tp,
  update,
  user,
  news,
  userProfile,
  verify,
  sub,
  business,
  faq,
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
        ) : disable ? (
          <BusinessDeatails disable />
        ) : approve ? (
          <BusinessDeatails approve />
        ) : sub ? (
          <SubPackage />
        ) : business ? (
          <Businesses />
        ) : faq ? (
          <Faq />
        ) : (
          <FiendsCont admin />
        )}
      </main>
    </section>
  );
};

export default Admin;
