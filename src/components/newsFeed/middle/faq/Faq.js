import React from "react";
import styles from "../../../../styles/newsFeed/faq.module.css";
import style from "../../../../styles/newsFeed/index.module.css";
import BackArrow from "../../BackArrow";
import { faq } from "../../database";

const Faq = () => {
  const option = [
    { main: "Add Question", color: "#039b2d" },
    { main: "My Questions", color: "#4063d6" },
  ];

  return (
    // <section className={`${style.center} ${styles.center}`}>
    <section className="center font-primary">
      <BackArrow heading={"My Questions"} option={option} added />
      <section className="bg-white p-4 overflow-scroll mt-5 h-[calc(100vh-80px)] ">
        {faq.map(({ question, answer }, index) => {
          return (
            <div key={index}>
              <p className="font-medium text-base text-black py-1">Question:</p>
              <p className="font-medium text-base text-primary">{question}</p>
              <div className="rounded p-6 mt-2 mx-0 mb-4 bg-[rgba(64, 99, 214, 0.1)]">
                <p className="italic font-normal p-6 pb-1">Answer:</p>
                <p className="italic font-normal text-[0.9em] text-black">
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Faq;
