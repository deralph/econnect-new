import React from "react";
import BackArrow from "../newsFeed/BackArrow";

import styles from "../../styles/admin/tp.module.css";
const Tp = () => {
  return (
    <section className="edit">
      <BackArrow noArr heading={"Upload Teaching Practice"} />
      <article className={styles.article}>
        <div>
          <img src="/teachingPractice.png" alt="teaching Practice" />
          <p>ONLY FOR FACULTY OF EDUCATION</p>
        </div>
        <div>
          <p></p>
          <p></p>
          <div></div>
          <label htmlFor="">
            <select name="" id="">
              <option value="pdf">pdf</option>
              <option value="png">png</option>
              <option value="jpeg">jpeg</option>
            </select>
          </label>
          <button>upload now</button>
        </div>
      </article>
    </section>
  );
};

export default Tp;
