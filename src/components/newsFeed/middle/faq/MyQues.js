import React from "react";
import styles from "../../../../styles/newsFeed/addques.module.css";
import { myQuestion } from "../../database";
import { MdDelete } from "react-icons/md";
import BackArrow from "../../BackArrow";

const MyQues = () => {
  const option = [
    { main: "Add Question", color: "#039B2D" },
    { main: "My Question", color: "rgba(50, 50, 50, 0.2)" },
  ];

  return (
    <>
      <BackArrow heading="Add Question" option={option} />

      <section className={styles.question}>
        {myQuestion.map(({ question, answer }, index) => {
          return (
            <>
              <div className={styles.quest} key={index}>
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
