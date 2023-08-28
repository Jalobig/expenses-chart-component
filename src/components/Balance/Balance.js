import React, { useEffect } from "react";
import classes from "./Balance.module.scss";
import Logo from "../../assets/images/logo.svg";
import useAnimateNumber from "use-animate-number";

const Balance = () => {
  const options = {
    duration: 1000,
    enterance: true,
    direct: true,
    disabled: false,
    decimals: 2,
  };
  const [balance, setBalance] = useAnimateNumber(0, options);
  useEffect(() => {
    setBalance(921.48);
  }, []);

  return (
    <div className={classes.balance}>
      <div className={classes.balance__row}>
        <div className={classes.balance__columns}>
          <h2 className={classes.balance__heading}>My balance</h2>
          <p className={classes.balance__amount}>${balance}</p>
        </div>
        <img src={Logo} alt="Logo" className={classes.balance__logo} />
      </div>
    </div>
  );
};

export default Balance;
