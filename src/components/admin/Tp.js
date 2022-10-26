import React from "react";
import BackArrow from "../newsFeed/BackArrow";

import styles from "../../styles/admin/tp.module.css";
import { FaFile } from "react-icons/fa";
const Tp = () => {
  return (
    <section className="edit">
      <BackArrow noArr heading={"Upload Teaching Practice"} />
      <article className={styles.article}>
        <div className={styles.image}>
          <img src="/teachingPractice.png" alt="teaching Practice" />
          <p>ONLY FOR FACULTY OF EDUCATION</p>
        </div>
        <div className={styles.info}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quis
            commodi quas nihil odio sunt
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            animi totam aliquid sapiente quam, voluptatibus nam nemo distinctio!
            Facilis, tempora?
          </p>
          <div>
            <FaFile style={{ fontSize: "2em", textAlign: "center" }} />
            <p>Attach file</p>
          </div>
          <label htmlFor="">
            select type
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
