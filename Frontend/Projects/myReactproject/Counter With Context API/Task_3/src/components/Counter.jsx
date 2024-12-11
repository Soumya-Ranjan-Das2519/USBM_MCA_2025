// src/components/Counter.jsx
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";
import "../styles/AppStyles.css";

const Counter = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div className="counter-container">
      <h1>Current Count: {count}</h1>
      <div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
