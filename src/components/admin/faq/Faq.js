import React from "react";
import BackArrow from "../../newsFeed/BackArrow";
import styles from "../../../styles/admin/faq.module.css";
import { faq } from "../../newsFeed/database";
import { FaGraduationCap } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
const Faq = () => {
  return (
    <section className="edit">
      <BackArrow noArr heading="FAQs" />
      <article className={styles.faq}>
        <div>
          {faq.map(({ question, answer }) => {
            return (
              <div className={styles.quesCont}>
                <img src="/profilePics.png" alt="profilePics" />
                <div className={styles.infoCont}>
                  <div classname={styles.info}>
                    <div>
                      <p>Oluwadamilola Samuel</p>
                      <p>
                        <FaGraduationCap
                          style={{ color: "#4063D6", marginRight: "6px" }}
                        />
                        Science, Computer Science
                      </p>
                      <p>
                        <FiUser
                          style={{ color: "#E59112", marginRight: "6px" }}
                        />
                        Dameaze
                      </p>
                    </div>
                    <button>Answer</button>
                  </div>
                  <p className={styles.question}>
                    <span>Question:</span>
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default Faq;
