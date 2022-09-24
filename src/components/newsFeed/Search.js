import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/newsFeed.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <FaSearch className={styles.icon} />
      <input type="text" placeholder="Tags, People, News, etc" />
    </div>
  );
};

export default Search;
