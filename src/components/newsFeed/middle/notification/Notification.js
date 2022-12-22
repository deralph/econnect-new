import React from "react";
import BackArrow from "../../BackArrow";
import Notifications from "../../right/Notification";

const Notification = () => {
  return (
    <section className="center overflow-scroll">
      <BackArrow heading={"Notification"} />
      <Notifications real />
    </section>
  );
};

export default Notification;
