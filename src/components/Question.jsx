import React from "react";
import ReactDOM from "react-dom";

const Category = ({name}) => (<span className={name.toLowerCase()}>{name}</span>)

const Question = ({question}) => {
  let meta = []
  if (question.category && question.category.length > 0) {
    question.category.forEach((element, index) => {
      meta.push(<Category key={index} name={element}/>)
    });
  }

  return (
    <div className="container">
      <div className="container__item question">
        <div className="meta">{meta}</div>
        <h1>{question.title || "missing"}</h1>
        <p>{question.content || "missing"}</p>
      </div>

      <div className="container__item facts">
        <h1>{question.pro || "missing"}</h1>
        <p>{question.contra || "missing"}</p>
      </div>
    </div>
  )
}

export default Question