import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../../styles/newsFeed/acad.module.css";

const Card = ({ Icon, name, color, link }) => {
  return (
    <Link
      to={`/${link}`}
      className={styles.card}
      style={{ background: `${color}` }}
    >
      <Icon className={styles.icon} />
      <p>{name}</p>
    </Link>
  );
};

export default Card;
