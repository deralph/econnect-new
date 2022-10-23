import React, { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import styles from "../../styles/admin/user.module.css";
import style from "../../styles/admin/edit.module.css";
import FiendsCont from "../newsFeed/middle/friends/FiendsCont";

const User = () => {
  const [user, SetUser] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className={style.edit}>
      <div className={styles.top}>
        <p>Users</p>
        <form action="">
          <FaFilter className={styles.filter} />
          <div className="">
            <input
              type="text"
              value={user}
              onChange={(e) => SetUser(e.target.value)}
            />
            <FaSearch className={styles.search} onClick={handleSubmit} />
          </div>
        </form>
      </div>
      <FiendsCont user admin />
    </section>
  );
};

export default User;
