import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import BackArrow from "../../BackArrow";
import Notifications from "../../right/Notification";

const Notification = () => {
  return (
    <section className={style.center}>
      <BackArrow heading={"Notification"} />
      <article>{}</article>
    </section>
  );
};

export default Notification;
