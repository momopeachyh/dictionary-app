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
            <div className="Definition">{definition.definition}</div>
            <div className="Example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
            <hr></hr>
          </section>
        );
      })}
    </div>
  );
}
