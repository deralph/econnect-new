import React from "react";
import styles from "../../../../styles/newsFeed/acad.module.css";

const Card = ({ Icon, name, color }) => {
  return (
    <div className={styles.card} style={{ background: `${color}` }}>
      <Icon className={styles.icon} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
