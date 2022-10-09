import React from "react";
import styles1 from "../../../../styles/newsFeed/index.module.css";
import AddQues from "./AddQues";
import MyQues from "./MyQues";

const Question = ({ myquestion }) => {
  return (
    <section className={styles1.center}>
      {myquestion ? <MyQues /> : <AddQues />}
    </section>
  );
};

export default Question;
