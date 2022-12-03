import React, { useState } from "react";
import style from "../../../../styles/newsFeed/index.module.css";
import styles from "../../../../styles/newsFeed/friends.module.css";
import BackArrow from "../../BackArrow";
import Category from "./Category";
import { IoIosArrowForward } from "react-icons/io";
import FiendsCont from "./FiendsCont";

const FRiends = ({ addFriends }) => {
  const [form, setForm] = useState({
    student: "",
    faculty: "",
    department: "",
    // nonStudent: "",
  });

  const [category, setcategory] = useState(true);
  const [categoryAdded, setcategoryAdded] = useState();

  const option = [
    {
      main: addFriends ? "Add in Category" : "Add Friends",
      color: "#4063D6",
    },
  ];

  return (
    <section className="center">
      {addFriends && category && (
        <Category
          setcategory={setcategory}
          form={form}
          setForm={setForm}
          setcategoryAdded={setcategoryAdded}
        />
      )}
      <BackArrow
        heading={addFriends ? "Add Friends" : "Friends"}
        option={option}
      />
      {categoryAdded && (
        <p className="flex items-center font-primary text-xl  ml-[5%] font-normal text-primary">
          {categoryAdded.faculty}
          {categoryAdded.department && (
            <>
              <IoIosArrowForward />
              {categoryAdded.department}
            </>
          )}
        </p>
      )}
      {addFriends ? <FiendsCont addFriends /> : <FiendsCont />}
    </section>
  );
};

export default FRiends;
