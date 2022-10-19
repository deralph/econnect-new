import React from "react";
import { FaStar, FaToolbox } from "react-icons/fa";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/business.module.css";
import { business } from "../../database";
import { AiTwotoneTag } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import BackArrow from "../../BackArrow";

const Business = () => {
  const rate = [1, 2, 3, 4, 5];
  const option = [{ main: "Add Business", Icon: FaToolbox, color: "#4063D6" }];
  return (
    <section className={style.center}>
      <BackArrow heading="Business" option={option} />

      <article className={styles.business}>
        {business.map(({ image, name, phone, type, rating }, index) => {
          return (
            <article key={index}>
              <div className={styles.busCont}>
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
                      key={index}
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
