import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="Part-of-speech">{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <section key={index}>
            <span className="Definition">{definition.definition}</span>
            <br></br>
            <span className="Example">{definition.example}</span>
            <Synonyms synonyms={definition.synonyms} />
          </section>
        );
      })}
      <hr></hr>
    </div>
  );
}
