<h1 align = "center">Js和ReactJs</h1>

```md
git add .
git commit -m "commit"
git clone git@github.com:lushiheng123/JS-ReactJS.git
git checkout -b main\_
git push -u origin main
```

# 目录

- 加减法

# 1. 加减法`useState`+`button的onclick`

<details>

<summary>ReactJs</summary>

```jsx
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
```

</details>
