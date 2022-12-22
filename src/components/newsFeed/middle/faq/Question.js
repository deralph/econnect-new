import React from "react";
import AddQues from "./AddQues";
import MyQues from "./MyQues";

const Question = ({ myquestion }) => {
  return (
    <section className="center">
      {myquestion ? <MyQues /> : <AddQues />}
    </section>
  );
};

export default Question;
