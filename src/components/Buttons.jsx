import React from "react";

const Buttons = ({click}) => (
  <div className="test-buttons antworten">
    <button className="test-button" value="2" onClick={click}>Ja</button>
    <button className="test-button" value="1" onClick={click}>Eher Ja</button>
    <button className="test-button" value="0" onClick={click}>Neutral</button>
    <button className="test-button" value="-1" onClick={click}>Eher Nein</button>
    <button className="test-button" value="-2" onClick={click}>Nein</button>
    <button className="test-button skip" value="_" onClick={click}>Keine Meinung</button>
  </div>
)

export default Buttons