import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/friends.module.css";
import BackArrow from "../../BackArrow";
import { friends } from "../../database";

const FRiends = () => {
  const option = [
    {
      main: "Add Friends",
      color: "#4063D6",
    },
  ];

  return (
    <section className={style.center}>
      <BackArrow heading="Friends" option={option} />
      <article className={styles.container}>
        {friends.map(({ img, name, course, active }) => {
          return (
            <div className={styles.friend}>
              <div className="">
                <img src={img} alt={name} />
                {active && <p style={{ background: "#039b2d" }}></p>}
              </div>
              <p className={styles.name}>{name}</p>
              <p className={styles.course}>{course}</p>
              <button>chat</button>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default FRiends;
