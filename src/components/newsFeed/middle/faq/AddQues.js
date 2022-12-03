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
      {/* <div className={`${style.ques} ${styles.ques}`}> */}
      <div className="flex justify-between items-center w-full ">
        <BackArrow heading={"Add Question"} option={option} noAdd />
      </div>
      <div className="bg-white p-6 overflow-scroll">
        <p className="font-primary font-medium text-base text-primary py-4">
          Your Question
        </p>
        <textarea className="h-[30vh] w-[90%] bg-[rgba(217, 217, 217, 0.16)] border border-solid border-[rgba(0, 0, 0, 0.1)] p-3" />
        <button className="bg-primary rounded font-primary font-medium mt-6 text-white p-3 text-[0.8em]">
          post now
        </button>
      </div>
    </>
  );
};

export default AddQues;
