import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("red");
  const click = (color) => {
    setColor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div className="App">
      <button onClick={(color) => click("yellow")}>Change Color</button>
    </div>
  );
}

export default App;
