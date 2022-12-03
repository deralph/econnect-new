import React from "react";
import styles from "../../../../styles/newsFeed/teachprac.module.css";
import style from "../../../../styles/newsFeed/index.module.css";
import style1 from "../../../../styles/newsFeed/acad.module.css";
import BackArrow from "../../BackArrow";

const TeachPrac = ({ nysc }) => {
  return (
    <section className={`center p-5 my-auto`}>
      <BackArrow
        heading={nysc ? "NYSC Senate Lists " : "Teaching Practice"}
        noAdd
      />
      <div
        className={nysc ? `${styles.info} ${styles.nysc}` : `${styles.info}`}
      >
        <div className="w-[880%] my-0 mx-auto text-center z-10">
          <h3 className="text-[1.7em] ">
            {nysc
              ? "NYSC APPROVED LIST"
              : "Faculty of Education Students alone"}
          </h3>
          <p className="text-base italic">
            {nysc
              ? "Check Newly Added Senate List For AAUA"
              : "Check your Teaching Practice Postings"}
          </p>
        </div>
      </div>
      <div className="bg-white p-5 w-full h-auto mt-5 shadow-[0_4_21_0_#00000021]">
        <p className="text-primary font-bold block">Matric Number:</p>
        <form className="flex items-center my-4">
          <input
            className="p-[10px] w-[45%] mr-1 rounded-[3px] bg-[rgba(217, 217, 217, 0.16)] border-solid border-[0.7px] border-[rgba(0, 0, 0, 0.1)] "
            type="text"
            placeholder="170404110"
          />
          <button className="bg-primary text-white p-[10px]">
            View Posting
          </button>
        </form>
        <div className="font-bold min-h-[20vh] w-full text-[#07174bcf] bg-[#4063d61a] p-8 mt-5 text-base">
          {nysc ? "Status" : "Your Posting :"}
        </div>
      </div>
    </section>
  );
};

export default TeachPrac;
