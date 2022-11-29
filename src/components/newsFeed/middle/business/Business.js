import React from "react";
import { FaStar, FaToolbox } from "react-icons/fa";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/business.module.css";
import { business } from "../../database";
import { AiTwotoneTag } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import BackArrow from "../../BackArrow";
import { Link } from "react-router-dom";

const Business = ({ admin, small }) => {
  const rate = [1, 2, 3, 4, 5];
  const option = [{ main: "Add Business", Icon: FaToolbox, color: "#4063D6" }];
  return (
    <section
      className={
        small
          ? // ? `${styles.center1} `
            `basis-[30%] `
          : admin
          ? // ? `${styles.center}`
            `basis-full`
          : `center`
      }
    >
      {!admin && <BackArrow heading="Business" option={option} />}

      <article
        className="bg-white overflow-scroll h-full p-2 h-[calc(100vh-80px)]"
        // admin
        //   ? `${styles.business} ${styles.business1} `
        // : `${styles.business}`
      >
        {business.map(({ image, name, phone, type, rating }, index) => {
          // const arr  = info
          return (
            <Link
              to="/business-details"
              key={index}
              className={`flex items-end justify-between p-2 rounded-md ${
                admin
                  ? "shadow-[0px_0px_45px_rgba(0, 0, 0, 0.13)]"
                  : "shadow-[0px_0px_10px_rgba(0, 0, 0, 0.13)] mt-4"
              }`}
            >
              <div className="flex items-center">
                <img
                  src={image}
                  alt={name}
                  className={small ? "h-12" : "h-32 mr-3"}
                />
                <div>
                  <p
                    className={`bus-p text-primary  ${
                      small ? "text-[0.5em]" : "text-lg "
                    }`}
                  >
                    {name}
                  </p>
                  <p
                    className={`bus-p text-[rgba(0, 0, 0, 0.7)] ${
                      small ? "text-[0.4em]" : "text-sm"
                    } `}
                  >
                    <AiTwotoneTag
                      style={{ color: "#f00", marginRight: ".5em" }}
                    />
                    {type}
                  </p>
                  <p
                    className={`bus-p text-[rgba(0, 0, 0, 0.7)] ${
                      small ? "text-[0.6em]" : "text-base"
                    } `}
                  >
                    {" "}
                    <BsFillTelephoneFill
                      style={{ color: "#4063d6", marginRight: ".5em" }}
                    />{" "}
                    {phone}
                  </p>
                </div>
              </div>
              {!small && (
                <div className="flex">
                  {rate.map((ok, index) => {
                    return (
                      <FaStar
                        key={index}
                        style={{
                          color:
                            index < rating
                              ? "#E59112"
                              : "rgba(50, 50, 50, 0.3)",
                        }}
                      />
                    );
                  })}
                </div>
              )}
              {small && (
                <button className="font-primary font-semibold text-[0.45em] text-white rounded bg-[#08b839] py-1 px-2">
                  Approve
                </button>
              )}
            </Link>
          );
        })}
      </article>
    </section>
  );
};

export default Business;
