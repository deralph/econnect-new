import React, { useCallback, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Business from "../../newsFeed/middle/business/Business";
import styles from "../../../styles/admin/business.module.css";
import axios from "../../../extra/axios";

const Businesses = () => {
  const [allBusiness, setAllBusiness] = useState([]);

  const fetcher = useCallback(async () => {
    try {
      const { data } = await axios.get("business");
      setAllBusiness(data);
      // setAllBusiness(business);
    } catch (error) {
      console.log(error);
    }
  }, [setAllBusiness]);

  useEffect(() => {
    fetcher();
  }, [fetcher]);
  return (
    <section className="edit">
      {/* {allBusiness ? (
        <h4>LOADING ...</h4>
      ) : ( */}
      <>
        <div className={styles.bus}>
          <h2>Business</h2>
          <div>
            <input type="text" placeholder="Search business" />
            <FaSearch className={styles.search} />
          </div>
        </div>
        <article className={styles.main}>
          <div className={styles.smallBus}>
            {/* <Business admin info={allBusiness} /> */}
            <Business admin />
          </div>{" "}
          <div className={styles.smallBus}>
            <p className={styles.smallBusP}>Approval Request (21)</p>
            {/* <Business admin small info={allBusiness} /> */}
            <Business admin small />
          </div>
        </article>
      </>
      {/* )} */}
    </section>
  );
};

export default Businesses;
