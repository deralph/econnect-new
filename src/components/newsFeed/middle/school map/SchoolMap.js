import React from "react";
import BackArrow from "../../BackArrow";

const SchoolMap = () => {
  return (
    <section className={`center px-4`}>
      {" "}
      <BackArrow heading={"School Map"} noAdd />
      <img
        src="/map.png"
        alt="map illustration"
        className="mt-4 w-full rounded border-[10px] border-solid border-white shadow-[0_4px_21px_rgba(0,0,0,0.13)]"
      />
    </section>
  );
};

export default SchoolMap;
