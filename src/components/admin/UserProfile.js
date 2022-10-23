import React from "react";
import style from "../../styles/admin/edit.module.css";
import BackArrow from "../newsFeed/BackArrow";

const UserProfile = () => {
  return (
    <section className={style.edit}>
      <BackArrow heading={"Adetunji Oluwadamilola"} />
      <div className={style.info}></div>
    </section>
  );
};

export default UserProfile;
