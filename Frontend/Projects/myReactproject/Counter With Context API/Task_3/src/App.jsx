
// src/App.jsx
import React from "react";
import { CounterProvider } from "./components/CounterProvider";
import Counter from "./components/Counter";

const App = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default App;
