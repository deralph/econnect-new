import React from "react";
import BackArrow from "../../newsFeed/BackArrow";
import styles from "../../../styles/admin/stats.module.css";
import { FaArrowRight } from "react-icons/fa";
import { breakdown } from "../../newsFeed/database";

const UserStat = () => {
  return (
    <section className={`${styles.cont} edit`}>
      <BackArrow heading={"Usage Statistics"} />
      <article className={styles.cardCon}>
        <div className={styles.card}>
          <p>
            Number of Users
            <span>10781</span>
          </p>
          <ul>
            <li>
              App Users:
              <span>8924</span>
            </li>
            <li>
              Web Users
              <span>618</span>
            </li>
            <li>
              Total Login:
              <span>9542 </span>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <p>
            Numbers of Businesses
            <span>1281</span>
          </p>
          <ul>
            <li>
              Subscribed:
              <span>908</span>
            </li>
            <li>
              Unsubscribed:
              <span>301</span>
            </li>
            <li>
              Unapproved
              <span>72</span>
            </li>
          </ul>
        </div>
      </article>
      <article className={styles.breakdown}>
        <form action="">
          <p>Usage Breakdown</p>
          <div>
            <label htmlFor="">From:</label>
            <input type="date" />
            <label htmlFor="">To:</label>
            <input type="date" />
            <button>
              <FaArrowRight />
            </button>
          </div>
        </form>
        <div className={styles.breakCont}>
          {breakdown.map(({ name, user, time, color }) => {
            return (
              <div className={styles.breakCard}>
                <p style={{ color: `${color}` }}>{name}</p>
                <ul>
                  <li>
                    Number of Active users: <span>{user}</span>
                  </li>
                  <li>
                    Overall time Spent
                    <span>{time}</span>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default UserStat;
