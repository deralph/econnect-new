import React, { useState } from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/friends.module.css";
import BackArrow from "../../BackArrow";
import { friends } from "../../database";
import Category from "./Category";
import { IoIosArrowForward } from "react-icons/io";

const FRiends = ({ addFriends }) => {
  const [form, setForm] = useState({
    student: "",
    faculty: "",
    department: "",
    // nonStudent: "",
  });

  const [category, setcategory] = useState(true);
  const [categoryAdded, setcategoryAdded] = useState();

  const option = [
    {
      main: addFriends
        ? "Add in Category"
        : // : category === false && form.faculty && form.department
          // ? "Add in Category"
          "Add Friends",
      color: "#4063D6",
      // onclick: addFriends ? setcategory(true) : null,
    },
  ];

  return (
    <section className={style.center}>
      {addFriends && category && (
        <Category
          setcategory={setcategory}
          form={form}
          setForm={setForm}
          setcategoryAdded={setcategoryAdded}
        />
      )}
      <BackArrow
        heading={addFriends ? "Add Friends" : "Friends"}
        option={option}
      />
      {categoryAdded && (
        <p className={styles.added}>
          {categoryAdded.faculty}
          {categoryAdded.department && (
            <>
              <IoIosArrowForward />
              {categoryAdded.department}
            </>
          )}
        </p>
      )}
      <article className={styles.container}>
        {friends.map(({ img, name, course, active }, index) => {
          return (
            <div className={styles.friend} key={index}>
              <div className="">
                <img src={img} alt={name} />
                {active && <p style={{ background: "#039b2d" }}></p>}
              </div>
              <p className={styles.name}>{name}</p>
              <p className={styles.course}>{course}</p>
              <button
                style={{ background: `${addFriends ? `#4063D6` : "auto"}` }}
              >
                {addFriends ? "Follow" : "Chat"}
              </button>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default FRiends;
