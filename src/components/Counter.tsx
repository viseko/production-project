import { useState } from 'react'
import "./Counter.scss"

const Counter = () => {
  let [value, setValue] = useState(0);

  const increment = () => {
    setValue(++value);
  };

  const decrement = () => {
    setValue(--value);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{value}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter