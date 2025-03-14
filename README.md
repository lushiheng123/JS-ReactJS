<h1 align = "center">Js和ReactJs</h1>

```md
git add .
git commit -m "commit"
git clone git@github.com:lushiheng123/JS-ReactJS.git
git checkout -b main\_
git push -u origin main
```

```md
<details>

<summary></summary>

</details>
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

# 2. `document.body.style.backgroundColor`更改整体背景颜色

<details>
<summary>
Reactjs
</summary>

```jsx
import React, { useEffect, useState } from "react";

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
```

</details>

![alt text](README_Images/README/image.png)

# 3. 滚动窗口 UI

<details>

<summary>reactjs</summary>

```jsx
import React, { useState, useEffect } from "react";

export default function App() {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const phrases = ["code", "make beats", "hug puppies"];
  let sleepTime = 100;

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const writeLoop = async () => {
    let curPhraseIndex = 0;
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        setCurrentPhrase(curWord.substring(0, i + 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        setCurrentPhrase(curWord.substring(0, i - 1));
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      curPhraseIndex = (curPhraseIndex + 1) % phrases.length;
    }
  };

  useEffect(() => {
    writeLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>
        Hey, I'm Tom 👋
        <br />I like to {currentPhrase}
        <span id="cursor">|</span>
      </h1>
    </div>
  );
}
```

</details>

![alt text](README_Images/README/chrome-capture-2025-3-14.gif)
