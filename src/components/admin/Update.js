import React from "react";
import BackArrow from "../newsFeed/BackArrow";
import TimelinePost from "../newsFeed/middle/profile/TimelinePost";

const Update = () => {
  const option = [
    {
      main: "Post Update",
      color: "#4063D6",
    },
  ];
  return (
    <section className="edit">
      <BackArrow option={option} heading={"Updates"} noArr />
      <TimelinePost />
    </section>
  );
};

export default Update;
