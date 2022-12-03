import React from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/eportal.module.css";
import BackArrow from "../../BackArrow";

const Eportal = ({ results }) => {
  return (
    <section className="center p-6">
      <BackArrow noAdd heading={results ? "Results" : "E-Portal"} />
      <div className="bg-secondary text-white grid place-content-centerh-[90%]">
        {results ? "RESULTS PAGE" : "E-PORTAL PAGE"}
      </div>
    </section>
  );
};

export default Eportal;
