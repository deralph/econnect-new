import React from "react";
import BackArrow from "../newsFeed/BackArrow";

import styles from "../../styles/admin/tp.module.css";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
const Tp = ({ nysc }) => {
  return (
    <section className="edit">
      <BackArrow
        noArr
        heading={nysc ? "NYSC Senate List Upload" : "Upload Teaching Practice"}
      />
      <article className={styles.article}>
        <div className={styles.image}>
          <img
            src={nysc ? "nysc.png" : "/teachingPractice.png"}
            alt="teaching Practice"
          />
          <p>{nysc ? "GRADUATES ONLY" : "ONLY FOR FACULTY OF EDUCATION"}</p>
        </div>
        <div className={styles.info}>
          <p>
            Upload Document for Teaching Practice List arranged in the following
            order of fields:
            <span>
              RN | S/N | MATRIC NO | SURNAME | OTHER NAMES | GENDER | ORIGIN |
              GRADE | PHONE NO | STUDY MODE | JAMN NO | DATE OF BIRTH
            </span>
          </p>
          <div>
            <BsFillFileEarmarkTextFill
              style={{ fontSize: "4em", color: "#4063d6" }}
            />
            <p>Upload Document</p>
          </div>
          <label htmlFor="">
            <p>Document Format</p>
            <select name="" id="">
              <option value="pdf">PDF</option>
              <option value="png">PNG</option>
              <option value="jpeg">TPEG</option>
            </select>
          </label>
          <button>Upload </button>
        </div>
      </article>
    </section>
  );
};

export default Tp;
