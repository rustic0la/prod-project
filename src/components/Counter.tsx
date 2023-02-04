import React, { useState } from "react";
import styles from "./Counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className={styles.btn}>
      <h1 className={styles.green}>{count}</h1>

      <button onClick={handleClick}>increment</button>
    </div>
  );
};
