import React from "react";
import ReactDOM from "react-dom";

const Buttons = ({click}) => (
  <div className="buttons">
    <button value="2" onClick={click}>Stimme sehr zu</button>
    <button value="1" onClick={click}>Stimme zu</button>
    <button value="0" onClick={click}>Neutral</button>
    <button value="-1" onClick={click}>Stimme nicht zu</button>
    <button value="-2" onClick={click}>Stimme gar nicht zu</button>
    <button className="skip" value="_" onClick={click}>Keine Meinung</button>
  </div>
)

export default Buttons