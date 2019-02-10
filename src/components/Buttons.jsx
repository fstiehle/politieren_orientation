import React from "react";

const Buttons = ({click}) => (
  <div className="test-buttons">
    <button className="test-button" value="2" onClick={click}>Stimme sehr zu</button>
    <button className="test-button" value="1" onClick={click}>Stimme zu</button>
    <button className="test-button" value="0" onClick={click}>Neutral</button>
    <button className="test-button" value="-1" onClick={click}>Stimme nicht zu</button>
    <button className="test-button" value="-2" onClick={click}>Stimme gar nicht zu</button>
    <button className="test-button skip" value="_" onClick={click}>Keine Meinung</button>
  </div>
)

export default Buttons