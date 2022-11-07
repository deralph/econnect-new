import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiBuildings } from "react-icons/bi";
import { RiDirectionFill } from "react-icons/ri";
import { FaQuestionCircle, FaUserCheck, FaUserCircle } from "react-icons/fa";
import styles from "../../../../styles/newsFeed/acad.module.css";
import style from "../../../../styles/newsFeed/index.module.css";
import Card from "./Card";

const Container = () => {
  return (
    <section className={`${style.center} ${styles.center}`}>
      <h1 className={styles.head}>Academic Assistance</h1>
      <div className={styles.container}>
        <Card
          name="e-Portal"
          Icon={FaUserCircle}
          color="#210E09"
          link="e-portal"
        />
        <Card
          name="Results"
          Icon={AiOutlineUnorderedList}
          color="#224BD2"
          link="results"
        />
        <Card
          name="Teaching Practice"
          Icon={BiBuildings}
          color="#563708"
          link="teaching-practice"
        />
        <Card
          name="NYSC Approval"
          Icon={FaUserCheck}
          color="#12692B"
          link="nysc-list"
        />
        <Card
          name="Directions"
          Icon={RiDirectionFill}
          color="#07174B"
          link="direction"
        />
        <Card name="FAQs" Icon={FaQuestionCircle} color="#290756" link="faq" />
      </div>
    </section>
  );
};

export default Container;
