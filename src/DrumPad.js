import React, { useEffect, useRef } from 'react';

import './App.css';

function DrumPad(props) {
  const audioEl = useRef(null);

  const playSound = () => {
    audioEl.current.play()
    props.setDescription(props.description)
  }

  useEffect(() => {
    if (props.pressedKey.toUpperCase() === props.letter) {
      playSound()
      props.setPressedKey('')
    }

  }, [props.pressedKey])



  return (
    <div className="drum-pad">
      <button onClick={playSound}>{props.letter}</button>
      <audio id={props.letter} src={props.source} ref={audioEl} className="clip"></audio>

    </div>
  );
}

export default DrumPad;
