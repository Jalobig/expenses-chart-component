import React from "react";
import classes from "./Main.module.scss";
import Balance from "../../components/Balance/Balance";
import Spending from "../../components/Spending/Spending";

const Main = () => {
  

  return (
    <main className={classes.main}>
      <Balance />
      <Spending />
    </main>
  );
};

export default Main;
