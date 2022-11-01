import React from "react";
import style from "../../../../styles/newsFeed/faq.module.css";
import styles from "../../../../styles/newsFeed/addques.module.css";
import BackArrow from "../../BackArrow";

const AddQues = () => {
  const option = [
    {
      main: "Add Question",
      color: "rgba(50, 50, 50, 0.2)",
    },
    { main: "My Question", color: "#4063D6" },
  ];
  return (
    <>
      <div className={`${style.ques} ${styles.ques}`}>
        <BackArrow heading={"Add Question"} option={option} noAdd />
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
