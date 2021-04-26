import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playPronunciation(event) {
    event.preventDefault();
    let Pronunciation = new Audio(props.phonetics.audio);
    Pronunciation.play();
  }

  return (
    <div className="Phonetics">
      <span>
        <button onClick={playPronunciation}>
          <i className="fas fa-volume-up"></i>
        </button>{" "}
        {""}
        {props.phonetics.text}
      </span>
    </div>
  );
}
