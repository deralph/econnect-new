import React from "react";
import AppNav from "../navbars/AppNav";
import SideNav from "../navbars/SideNav";
import styles from "../../styles/newsFeed/index.module.css";
import RightSide from "./right/RightSide";
import FeedCenter from "../newsFeed/middle/feed/FeedCenter";
import PostCenter from "./middle/post/PostCenter";
import Container from "./middle/academicAssistance/Container";
import Eportal from "./middle/eportal/Eportal";
import TeachPrac from "./middle/teachPractice/TeachPrac";

const newsFeed = ({ post, nysc, teachprac, results, assistance, portal }) => {
  return (
    <section className={styles.section}>
      <AppNav />
      <div className="" style={{ display: "flex", paddingTop: "55px" }}>
        <SideNav />
        {post ? (
          <PostCenter />
        ) : assistance ? (
          <Container />
        ) : portal ? (
          <Eportal />
        ) : results ? (
          <Eportal results />
        ) : teachprac ? (
          <TeachPrac />
        ) : nysc ? (
          <TeachPrac nysc />
        ) : (
          <FeedCenter />
        )}
        <RightSide />
      </div>
    </section>
  );
};

export default newsFeed;
