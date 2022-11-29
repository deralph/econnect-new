import React from "react";
import { FaSearch } from "react-icons/fa";
import styles from "../../../styles/newsFeed/index.module.css";

const Search = () => {
  return (
    <div className="bg-white rounded relative my-1 p-5 max-h-[10%] shadow-[10px_10px_10px_black-100]">
      <FaSearch className="absolute top-1/2 right-8 text-primary translate-y-[-50%]" />
      <input
        type="text"
        placeholder="Tags, People, News, etc"
        className="py-3 px-4 w-full outline-none text-[0.5em] bg-[#D9D9D929] border-[0.58px] border-solid border-[#0000001A]"
      />
    </div>
  );
};

export default Search;
