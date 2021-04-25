import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Data(props) {
  if (props.data) {
    return (
      <div className="Data">
        <h1 className="word">{props.data.word}</h1>
        {props.data.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetics={phonetics} />
            </div>
          );
        })}
        <hr></hr>

        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
