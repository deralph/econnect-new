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
    <section className={`${style.center} ${styles.center}`}>
      <BackArrow heading={"My Questions"} option={option} added />
      <section className={styles.faq}>
        {faq.map(({ question, answer }) => {
          return (
            <div>
              <p className={styles.p1}>Question:</p>
              <p className={styles.p2}>{question}</p>
              <div className={styles.answer}>
                <p className={styles.p3}>Answer:</p>
                <p className={styles.p4}>{answer}</p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Faq;
