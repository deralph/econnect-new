import React from "react";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { businessAction } from "../../store/business.slice";
import FadeMenu from "../navbars/FadeMenu";

const BackArrow = ({ heading, option, added, noArr, noAdd }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBusiness = (main) => {
    if (main === "Add Business") {
      return dispatch(businessAction.add());
    }
    return;
  };

  return (
    <div
      className={`  flex justify-between items-center w-full p-2 
        ${added ? ` ` : noAdd ? ` p-[1.3em]` : ` `}
        `}
    >
      <h2
        className={`flex items-center text-xl sm:text-sm ${
          !noAdd && `font-semibold`
        }`}
      >
        {noArr || (
          <FaArrowLeft
            onClick={() => navigate(-1)}
            className="text-primary mr-[10px]"
          />
        )}{" "}
        {heading}
      </h2>
      {option && <FadeMenu option={option} />}
      {option && (
        <ul className="flex sm:hidden ">
          {option.map(({ main, Icon, color }, index) => {
            return (
              <li
                className="flex items-center ml-[1.3em] text-xs font-medium font-primary p-[0.8em] rounded-[0.4em] cursor-pointer sm:text-sm sm:mb-2"
                key={index}
                style={{ background: `${color}` }}
                onClick={() => handleBusiness(main)}
              >
                {
                  <Link
                    className="text-white"
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
                    {Icon && <Icon className="mr-[0.4em] float-left" />} {main}
                  </Link>
                }
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default BackArrow;
