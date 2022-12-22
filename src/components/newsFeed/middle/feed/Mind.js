import React from "react";
import { BsFillPlayCircleFill, BsCameraFill } from "react-icons/bs";

const Mind = () => {
  return (
    // <div className={styles.mind}>
    <div className="bg-white flex p-[1.4em]">
      <img
        src="/iconicUserPics.png"
        alt=""
        className="h-[5em] w-[5em] rounded-[50%] mr-4"
      />
      <div className="w-full">
        <textarea
          type="text"
          placeholder="What is on your mind"
          className="border-none outline-none h-[5em] w-full p-[1.3em] bg-[#0000001A] rounded"
        />
        <div className="flex mt-4 border-solid border-t border-t-[#3232327A]  ">
          <p className="border-solid border-r-[0.7px] border-r-[#32323240] basis-1/2 mt-[10px] flex items-center justify-center color-[#323232] text-lg">
            <BsCameraFill className="mr-[10px] text-[1.2em] text-primary" />
            Photo
          </p>
          <p className="basis-1/2 mt-[10px] flex items-center justify-center color-[#323232] text-lg">
            <BsFillPlayCircleFill className="mr-[10px] text-[1.2em] text-red-500" />
            Video
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mind;
