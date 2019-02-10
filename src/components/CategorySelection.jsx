import React from "react";
import Categories from "./Categories.jsx";
import Icon from "./Icon.jsx";

const Buttons = ({click, selected}) => {
  const list = [];

  Object.keys(Categories).forEach(cat => {
    
    const htmlClass = selected.includes(cat) ? "category-selection__button--active" : "";

    list.push( 
      <button className={ htmlClass + " no-button category-selection__button"} 
        id={cat} key={cat} onClick={click}>
        <Icon name={cat} tooltip={Categories[cat]}></Icon>
      </button> 
    )
  });

  return (
    <div className="category-selection">
      {list}
    </div>
  );
}

export default Buttons