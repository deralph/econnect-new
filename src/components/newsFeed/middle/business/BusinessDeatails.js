import React from "react";
import BackArrow from "../../BackArrow";
import { AiTwotoneTag } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { RiMailFill } from "react-icons/ri";
import { BsFillTelephoneFill, BsGlobe } from "react-icons/bs";

const BusinessDeatails = ({ disable, approve }) => {
  const option = [
    {
      main: `${disable ? "Disable" : approve ? "Approve" : "Report"}`,
      color: `${disable ? "#f00" : approve ? "#08B839" : "#4063D6"}`,
    },
  ];
  const images = [
    "/businessdp.png",
    "/businessdp.png",
    "/businessdp.png",
    "/businessdp.png",
    "/businessdp.png",
  ];
  return (
    <section
      className={`center overflow-scroll ${
        approve || disable ? `  basis-full` : ""
      }`}
    >
      <BackArrow heading={"Voltage Services"} option={option} />
      <article className="h-full bg-white p-4 overflow-scroll my-3 mx-auto">
        <div className="flex items-center relative ">
          <div className="h-52 w-52 relative">
            <img src="/businessdp.png" alt="businessdp" className="w-full" />
            <p className="phone">Approved</p>
          </div>
          <div className="ml-8">
            <h1 className="font-primary font-medium text-2xl text-primary">
              Voltage Services
            </h1>
            <p className="flex items-center text-base font-primary font-medium text-[rgba(0,0,0,0.7)]">
              <AiTwotoneTag className="text-[#f00] mr-2" /> Gift Cards & BTC{" "}
            </p>
            <p className="flex items-center text-base font-primary font-medium text-[rgba(0,0,0,0.7)]">
              {" "}
              <MdLocationPin className="text-[#E59112] mr-2" /> Warri, Delta
              state
            </p>
            <p className="flex items-center text-base font-primary font-medium text-[rgba(0,0,0,0.7)]">
              {" "}
              <RiMailFill className="text-primary mr-2" />
              vandisleo6@gmail.com
            </p>
            <p className="flex items-center text-base font-primary font-medium text-[rgba(0,0,0,0.7)]">
              {" "}
              <BsGlobe className="text-[#596384] mr-2" /> wa.link/8cvm4l
            </p>
          </div>
          <p className="phone rounded flex items-center">
            <BsFillTelephoneFill className="text-white mr-2" />
            09011444830
          </p>
        </div>
        <div className="bg-[rgba(217, 217, 217, 0.25)] rounded mt-8 p-6">
          <p className="font-primary font-normal text-base text-[rgba(0, 0, 0, 0.6)]">
            Description
          </p>
          <p className="font-primary font-normal text-[0.9em] text-justify text-black mt-3">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec,{" "}
          </p>
        </div>
        <div className="flex overflow-scroll mt-8">
          {images.map((img, index) => (
            <img
              src={img}
              alt={`extra buiness images ${index}`}
              key={index}
              className="mr-4 rounded h-44 shadow-[0px 4px 35px rgba(0, 0, 0, 0.1)]"
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default BusinessDeatails;
