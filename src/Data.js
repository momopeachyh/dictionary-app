import React from "react";
import Meaning from "./Meaning";

export default function Data(props) {
  console.log(props.data);
  if (props.data) {
    return (
      <div className="Data">
        <h2 className="word">{props.data.word}</h2>

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
