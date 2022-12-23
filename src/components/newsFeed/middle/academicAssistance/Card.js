import React from "react";
import { Link } from "react-router-dom";

const Card = ({ Icon, name, color, link }) => {
  return (
    <Link
      to={`/${link}`}
      className="min-w-[150px] basis-[31%] lg:basis-[46%] grid place-content-center w-[30%] h-[30vh] rounded-2xl text-white text-base mb-8 border-8 border-solid border-white shadow-2xl"
      style={{ background: `${color}` }}
    >
      <Icon className="text-4xl my-1 mx-auto" />
      <p>{name}</p>
    </Link>
  );
};

export default Card;
