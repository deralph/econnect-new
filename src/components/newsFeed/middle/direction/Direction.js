import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/direction.module.css";
import { direction } from "../../database";
import BackArrow from "../../BackArrow";
import { FaArrowLeft } from "react-icons/fa";

const Direction = () => {
  return (
    <section className={`${style.center} ${styles.section} `}>
      {/* <BackArrow heading="Directions" /> */}
      <h2>
        <FaArrowLeft style={{ color: "#4063D6", marginRight: "10px" }} />{" "}
        Directions
      </h2>
      <div className={styles.center}>
        <article className={styles.direction}>
          {direction.map(({ image, direction, heading }) => {
            return (
              <div className={styles.cont}>
                <img src={image} alt={heading} />
                <div>
                  <h3>{heading}</h3>
                  <p>{direction}</p>
                </div>
              </div>
            );
          })}
        </article>
        <div className={styles["info-cont"]}>
          <div className={styles.info}>directions appear here</div>
          <button>view school map</button>
        </div>
      </div>
    </section>
  );
};

export default Direction;
