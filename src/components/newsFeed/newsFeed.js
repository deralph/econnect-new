import React from "react";
import AppNav from "../navbars/AppNav";
import SideNav from "../navbars/SideNav";
import RightSide from "./right/RightSide";
import FeedCenter from "../newsFeed/middle/feed/FeedCenter";
import PostCenter from "./middle/post/PostCenter";
import Container from "./middle/academicAssistance/Container";
import Eportal from "./middle/eportal/Eportal";
import TeachPrac from "./middle/teachPractice/TeachPrac";
import SchoolMap from "./middle/school map/SchoolMap";
import Direction from "./middle/direction/Direction";
import Faq from "./middle/faq/Faq";
import Question from "./middle/faq/Question";
import Business from "./middle/business/Business";
import BusinessDeatails from "./middle/business/BusinessDeatails";
import Profile from "./middle/profile/Profile";
import EditProfile from "./middle/profile/EditProfile";
import Notification from "./middle/notification/Notification";
import FRiends from "./middle/friends/FRiends";
import { GiHamburgerMenu } from "react-icons/gi";

const NewsFeed = ({
  post,
  faq,
  schoolMap,
  nysc,
  addques,
  teachprac,
  results,
  assistance,
  portal,
  direction,
  myquestion,
  business,
  businessDetails,
  profile,
  editProfile,
  notification,
  friends,
  friendsProfile,
  addFriends,
}) => {
  // const nav = useRef();

  // const click = () => {
  // nav.current.display = "block";
  // };

  return (
    <section className="bg-[#eee] relative h-auto">
      <AppNav />
      <main className="flex pt-[55px]">
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
        ) : schoolMap ? (
          <SchoolMap />
        ) : direction ? (
          <Direction />
        ) : faq ? (
          <Faq />
        ) : addques ? (
          <Question />
        ) : myquestion ? (
          <Question myquestion />
        ) : business ? (
          <Business />
        ) : businessDetails ? (
          <BusinessDeatails />
        ) : profile ? (
          <Profile pro />
        ) : editProfile ? (
          <EditProfile />
        ) : notification ? (
          <Notification />
        ) : friends ? (
          <FRiends />
        ) : friendsProfile ? (
          <Profile friendsProfile />
        ) : addFriends ? (
          <FRiends addFriends />
        ) : (
          <FeedCenter />
        )}
        {notification ? <RightSide notification /> : <RightSide />}
      </main>
    </section>
  );
};

export default NewsFeed;
