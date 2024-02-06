import React, { useState, useEffect } from 'react';
import './App.css';
import Flowers from './img/flowers.gif';
import Kissing from './img/kissing.gif';
import { Howl } from 'howler';
import Song1 from './audio/song1.mp3';
import Song2 from './audio/song2.mp3';

function App() {
  const noOptions = [
    "Are you sure?",
    "Really sure?",
    "Is that your final decision?",
    "Is that really what you want to do?",
    "Are you positive?",
    "Are you okay with that?",
    "Do you not want to take more time to think it over?",
    "Are you absolutely certain?",
    "Is this what you want?",
  ];
  const [noValue, setNoValue] = useState("No");
  const [yesSize, setYesSize] = useState(2);
  const [isYes, setIsYes] = useState(false);
  const [sound, setSound] = useState(new Howl({
    src: [Song1]
  }))

  useEffect(() => {
    sound.play();
  }, [sound]);

  const yesStyle = {
    fontSize: `${yesSize}rem`,
    margin: "1rem",
  }

  const noStyle = {
    fontSize: `2rem`,
    margin: "1rem",
  }

  const handleClickNo = () => {
    const random = Math.floor(Math.random() * noOptions.length);
    setNoValue(noOptions[random])
    setYesSize(yesSize + 2);

  }

  const handleClickYes = () => {
    setIsYes(true);
    sound.pause();
    setSound(new Howl({
      src: [Song2]
    }))
  }

  return (
    <div className="App">
      {!isYes ?
        <>
          <img alt={"broken img"} src={Flowers} width={350} />
          <h3>Will You Be My Valentines?</h3>
          <div>
            <button class="button-yes" type="button" onClick={handleClickYes} style={yesStyle}>Yes</button>
            <button class="button-no" type="button" onClick={handleClickNo} style={noStyle}>{noValue}</button>
          </div>
        </> :
        <>
          <>
            <img alt={"broken img"} src={Kissing} width={300} />
            <h3>Ok yay!</h3>
          </>
        </>
      }
    </div>
  );
}

export default App;
