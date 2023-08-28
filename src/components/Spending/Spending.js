import React, { useEffect, useState } from "react";
import classes from "./Spending.module.scss";
import useAnimateNumber from "use-animate-number";
const WEEK = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

const Spending = () => {
  const options = {
    duration: 1000,
    enterance: true,
    direct: true,
    disabled: false,
    decimals: 2,
  };
  const [total, setTotal] = useAnimateNumber(0, options);
  const [avg, setAvg] = useAnimateNumber(0, { ...options, decimals: 1 });
  useEffect(() => {
    setTotal(478.33);
    setAvg(2.4);
  }, []);
  let data = require("../../assets/data.json");
  const day = new Date().getDay();

  return (
    <div className={classes.spending}>
      <h1 className={classes.spending__heading}>
        Spending - Last 7 days
      </h1>
      <div className={classes.spending__histogram}>
        {data.map((dailyData) => {
          const colorGraph = WEEK[day] === dailyData.day;
          return (
            <div key={dailyData.day} className={classes.spending__daily}>
              <div className={classes["spending__daily--group"]}>
                <div className={classes["spending__daily--info"]}>
                  ${dailyData.amount}
                </div>
              </div>
              <div
                className={`${classes["spending__daily--graph"]} ${
                  colorGraph && classes["spending__daily--max"]
                } `}
                style={{
                  height: `${((dailyData.amount / 55.85) * 160) / 16}rem`,
                }}
              ></div>
              <p className={classes["spending__daily--day"]}>{dailyData.day}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <div className={classes.summary}>
        <div className={classes.summary__column}>
          <h2 className={classes.summary__heading}>Total this month</h2>
          <p className={classes.summary__amount}>${total}</p>
        </div>
        <div className={classes["summary__column--right"]}>
          <h3 className={classes.summary__avg}>+{avg}%</h3>
          <p className={classes.summary__text}>from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Spending;
