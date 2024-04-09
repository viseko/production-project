import { useState } from 'react'
import classes from "./Counter.module.scss"

const Counter = () => {
  let [value, setValue] = useState(0);

  const increment = () => {
    setValue(++value);
  };

  const decrement = () => {
    setValue(--value);
  };

  return (
    <div className={classes.kek}>
      <button className={classes.button} onClick={increment}>+</button>
      <span>{value}</span>
      <button className={classes.button} onClick={decrement}>-</button>
    </div>
  )
}

export default Counter