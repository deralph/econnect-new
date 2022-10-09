import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import styles from "../../../../styles/newsFeed/addques.module.css";
import style from "../../../../styles/newsFeed/faq.module.css";
import { myQuestion } from "../../database";
import style1 from "../../../../styles/newsFeed/teachprac.module.css";
import { MdDelete } from "react-icons/md";

const MyQues = () => {
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
      <section className={styles.question}>
        {myQuestion.map(({ question, answer }) => {
          return (
            <>
              <div className={styles.quest}>
                <p>{question}</p>
                <MdDelete className={styles.icon} />
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div className={styles.ans}>
                  <p>Answer:</p>
                  <p
                    style={{
                      color: !answer && "#f00",
                      fontStyle: !answer && "italic",
                    }}
                  >
                    {answer || "Not yet answered"}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MyQues;
