import React, { useState, useEffect } from 'react';

export default function App() {
  const [currentPhrase, setCurrentPhrase] = useState('');
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
        Hey, I'm Tom 👋<br />I like to {currentPhrase}<span id="cursor">|</span>
      </h1>
    </div>
  );
}