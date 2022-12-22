import React from "react";
import BackArrow from "../../BackArrow";

const Eportal = ({ results }) => {
  return (
    <section className="center p-6">
      <BackArrow noAdd heading={results ? "Results" : "E-Portal"} />
      <div className="bg-secondary text-white grid place-content-center h-[90%]">
        {results ? "RESULTS PAGE" : "E-PORTAL PAGE"}
      </div>
    </section>
  );
};

export default Eportal;
