import React from "react";
import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const number_add = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const number_reduce = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="App">
      <button onClick={() => number_add()}>➕</button>
      <input placeholder="数量" value={count} />
      <button onClick={() => number_reduce()}>➖</button>
    </div>
  );
}

export default App;
