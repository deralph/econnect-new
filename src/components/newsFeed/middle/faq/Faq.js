import React from "react";
import styles from "../../../../styles/newsFeed/faq.module.css";
import style from "../../../../styles/newsFeed/index.module.css";
import BackArrow from "../../BackArrow";
import style1 from "../../../../styles/newsFeed/teachprac.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { faq } from "../../database";

const Faq = () => {
  return (
    <section className={`${style.center} ${styles.center}`}>
      <div className={styles.ques}>
        <h2>
          <FaArrowLeft
            className={style1.icon}
            style={{ color: "#4063D6", marginRight: "10px" }}
          />{" "}
          School Map{" "}
        </h2>
        <ul>
          <li>Add Question</li>
          <li>My Questions</li>
        </ul>
      </div>
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
