import React, { useState, useEffect } from 'react';
import DrumPad from './DrumPad';
import { sounds } from './sounds';
import './App.css';

function App() {

  const [description, setDescription] = useState('');
  const [pressedKey, setPressedKey] = useState('');

  const handleKeyPress = (event) => {
    console.log('in event listener')
    const keyCode = event.which || event.keyCode
    const key = String.fromCharCode(keyCode)
    setPressedKey(key)

  }

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [])


  return (
    <div id="App">
      <div id="drum-machine">
        <h2>beatMaker2000</h2>
        <div id="drum-pad">
          {sounds.map((sound, index) => {
            return <DrumPad
              key={index}
              letter={sound.letter}
              source={sound.source}
              description={sound.description}
              setDescription={setDescription}
              pressedKey={pressedKey}
              setPressedKey={setPressedKey}
            />
          })}
        </div>

        <p id='display'>{description}</p>

      </div>
    </div>
  );
}

export default App;
