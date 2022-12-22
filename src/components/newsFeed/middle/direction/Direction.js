import React from "react";
import { direction } from "../../database";
import BackArrow from "../../BackArrow";

const Direction = () => {
  return (
    // class section
    <section className="center relative overflow-hidden px-4 pb-2 ">
      <BackArrow heading="Directions" noAdd />

      <div className="flex justify-evenly lg:flex-col-reverse">
        <article className="bg-white basis-[47%] p-4 overflow-scroll h-[calc(100vh-100px)]">
          {direction.map(({ image, direction, heading }, index) => {
            return (
              <div
                className={`flex py-[10px] px-1 border-b-[0.5px] border-solid border-[rgba(0, 0, 0, 0.35)] ${(index =
                  direction.length - 1 && "border-none")}`}
                key={index}
              >
                <img src={image} alt={heading} className="rounded h-20" />
                <div className="ml-8 flex justify-between flex-col">
                  <h3 className="font-medium text-sm text-primary">
                    {heading}
                  </h3>
                  <p className="font-normal text-xs text-[rgba(50, 50, 50, 0.75)s]">
                    {direction}
                  </p>
                </div>
              </div>
            );
          })}
        </article>
        <div className="basis-[47%] lg:mb-8">
          <div className="w-full grid place-content-center h-[45vh] bg-white text-[#4063d64d] uppercase mb-4">
            directions appear here
          </div>
          <button className="bg-[#092685] rounded w-full font-medium text-base text-white p-2 shadow-[0px_4px_21px_0px_#00000021]">
            view school map
          </button>
        </div>
      </div>
    </section>
  );
};

export default Direction;
