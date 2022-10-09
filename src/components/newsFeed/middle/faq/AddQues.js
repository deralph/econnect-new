import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import style1 from "../../../../styles/newsFeed/teachprac.module.css";
import style from "../../../../styles/newsFeed/faq.module.css";
import styles from "../../../../styles/newsFeed/addques.module.css";

const AddQues = () => {
  return (
    <>
      <div className={`${style.ques} ${styles.ques}`}>
        <h2>
          <FaArrowLeft
            className={style1.icon}
            style={{ color: "#4063D6", marginRight: "10px" }}
          />{" "}
          Add Question
        </h2>
        <ul>
          <li style={{ background: "rgba(50, 50, 50, 0.2)" }}>Add Question</li>
          <li>My Questions</li>
        </ul>
      </div>
      <div className={styles.question}>
        <p className={styles.p}>Your Question</p>
        <textarea />
        <button>post now</button>
      </div>
    </>
  );
};

export default AddQues;
