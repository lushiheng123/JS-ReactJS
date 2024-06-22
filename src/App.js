import React from "react";
import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);
  const number_add = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <button onClick={(count) => number_add()}>➕</button>
      <input placeholder="数量" value={count} />
    </div>
  );
}

export default App;
