import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/newsFeed/addques.module.css";
import style from "../../styles/newsFeed/faq.module.css";
import style1 from "../../styles/newsFeed/teachprac.module.css";

const BackArrow = ({ heading, option, added, noArr, noAdd }) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        added
          ? `${style.ques}`
          : noAdd
          ? `${style.ques} ${styles.ques1}`
          : `${style.ques} ${styles.ques}`
      }
    >
      <h2>
        {noArr || (
          <FaArrowLeft
            onClick={() => navigate(-1)}
            className={style1.icon}
            style={{ color: "#4063D6", marginRight: "10px" }}
          />
        )}{" "}
        {heading}
      </h2>
      {option && (
        <ul>
          {option.map(({ main, Icon, color }, index) => {
            return (
              <li
                key={index}
                style={{ background: `${color}` }}
                // onClick={onclick}
              >
                {Icon && <Icon style={{ marginRight: "0.4em" }} />}
                {main}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BackArrow;
