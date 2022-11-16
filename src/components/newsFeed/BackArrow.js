import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/newsFeed/addques.module.css";
import style from "../../styles/newsFeed/faq.module.css";
import style1 from "../../styles/newsFeed/teachprac.module.css";

const BackArrow = ({ heading, option, added, noArr, noAdd }) => {
  const navigate = useNavigate();
  const onclick = (param) => {
    if (param === "Add Question") {
      return navigate("/addques");
    }
    if (param === "My Questions") {
      return navigate("/myquestion");
    }
    return;
  };
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
                // onClick={onclick(main)}
              >
                <Link
                  to={
                    main === "Add Question"
                      ? "/addques"
                      : main === "My Questions"
                      ? "/myquestion"
                      : main === "Post Update"
                      ? "/post-news"
                      : main === "View Posted Updates"
                      ? "/updates"
                      : main === "Add Friends"
                      ? "/add-friends"
                      : main === "Edit Profile"
                      ? "/edit-Profile"
                      : main === "Message"
                      ? "/chat"
                      : ""
                  }
                >
                  {Icon && <Icon style={{ marginRight: "0.4em" }} />}
                  {main}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BackArrow;
