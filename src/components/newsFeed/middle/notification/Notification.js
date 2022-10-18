import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import BackArrow from "../../BackArrow";
import Notifications from "../../right/Notification";

const Notification = () => {
  return (
    <section className={style.center} style={{ overflow: "scroll" }}>
      <BackArrow heading={"Notification"} />
      <Notifications real />
    </section>
  );
};

export default Notification;
