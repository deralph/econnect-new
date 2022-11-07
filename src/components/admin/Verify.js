import React from "react";
import style from "../../styles/admin/edit.module.css";
import BackArrow from "../newsFeed/BackArrow";
import FiendsCont from "../newsFeed/middle/friends/FiendsCont";

const Verify = () => {
  return (
    <sestion className={style.edit}>
      <BackArrow heading={"Verified User"} noArr />
      <FiendsCont admin verify />
    </sestion>
  );
};

export default Verify;
