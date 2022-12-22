import React from "react";
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
      <BackArrow heading="My Question" option={option} />

      {/* <section className={styles.question}> */}
      <section className="bg-white h-[calc(100vh-80px)] p-8 overflow-scroll">
        {myQuestion.map(({ question, answer }, index) => {
          return (
            <article key={index}>
              <div className="rounded relative py-2 bg-[rgba(64, 99, 214, 0.05)]">
                <p className="font-primary italic font-normal text-[0.9em] text-black p-6 w-[95%]">
                  {question}
                </p>
                <MdDelete className="text-white rounded text-red-500 text-6 p-[0.1em] absolute right-[1em] top-[1em] shadow-[0px_3.px_28px_rgba(0, 0, 0, 0.13)]" />
              </div>
              <div className="flex justify-end">
                <div className="p-4 w-3/5 rounded border-[0.5px] border-solid border-black-300">
                  <p className="font-medium text-primary font-primary italic text-[0.9em] text-black">
                    Answer:
                  </p>
                  <p
                    // style={{
                    // color: !answer && " #f00 ",
                    // fontStyle: !answer && "italic",
                    // }}
                    className={`font-primary italic text-[0.9em] text-black ${
                      !answer && "text-red-500 italic"
                    }`}
                  >
                    {answer || "Not yet answered"}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default MyQues;
