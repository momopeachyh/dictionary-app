import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.tiny}
                    className="img-fluid"
                    alt={props.searchterm}
                  ></img>
                </a>
              </div>
            );
          })}
        </div>
        <hr></hr>
      </div>
    );
  } else {
    return null;
  }
}
