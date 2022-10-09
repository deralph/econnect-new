import React from "react";
import { FaArrowLeft, FaStar, FaToolbox } from "react-icons/fa";
import styles from "../../../../styles/newsFeed/addques.module.css";
import style from "../../../../styles/newsFeed/faq.module.css";
import style1 from "../../../../styles/newsFeed/teachprac.module.css";
import styles1 from "../../../../styles/newsFeed/index.module.css";
import stylo from "../../../../styles/newsFeed/business.module.css";
import { business } from "../../database";
import { AiTwotoneTag } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Business = () => {
  const rate = [1, 2, 3, 4, 5];

  return (
    <section className={styles1.center}>
      <div className={`${style.ques} ${styles.ques}`}>
        <h2>
          <FaArrowLeft
            className={style1.icon}
            style={{ color: "#4063D6", marginRight: "10px" }}
          />{" "}
          Business
        </h2>
        <ul>
          <li style={{ background: "#4063D6" }}>
            <FaToolbox style={{ marginRight: "0.4em" }} />
            Add Business
          </li>
        </ul>
      </div>
      <article className={stylo.business}>
        {business.map(({ image, name, phone, type, rating }) => {
          return (
            <article>
              <div className={stylo.busCont}>
                <img src={image} alt={name} />
                <div>
                  <p>{name}</p>
                  <p>
                    <AiTwotoneTag
                      style={{ color: "#f00", marginRight: ".5em" }}
                    />
                    {type}
                  </p>
                  <p>
                    {" "}
                    <BsFillTelephoneFill
                      style={{ color: "#4063d6", marginRight: ".5em" }}
                    />{" "}
                    {phone}
                  </p>
                </div>
              </div>
              <div>
                {rate.map((ok, index) => {
                  return (
                    <FaStar
                      style={{
                        color:
                          index < rating ? "#E59112" : "rgba(50, 50, 50, 0.3)",
                      }}
                    />
                  );
                })}
              </div>
            </article>
          );
        })}
      </article>
    </section>
  );
};

export default Business;
